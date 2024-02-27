import React, { useEffect, useReducer } from "react";

import NewsItems from "./NewsItems";

export default function News({ category }) {
  const initialState = {
    isLoading: true,
    articles: [],
    category: "general",
    page: 1,
    nbPages: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return { ...state, isLoading: true };
      case "GET_NEWS":
        return {
          ...state,
          isLoading: false,
          articles: action.payload.articles,
        };
      case "NEXT_PAGE":
        return { ...state, page: state.page + 1 };
      case "PREV_PAGE":
        return { ...state, page: state.page - 1 };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  let Api =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=1187a502b1ac40ae973437a76f7422c3";

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_NEWS",
        payload: { articles: data.articles },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(`${Api}&category=${category}&page=${state.page}&pageSize=9`);
  }, [category, state.page]);
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };
  return (
    <>
      {state.isLoading && (
        <img
          src="public/loading.gif"
          className="position-absolute top-50 start-50 translate-middle"
          alt=""
        />
      )}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between ">
        <button
          disabled={state.page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={() => {
            getPrevPage();
          }}
        >
          &larr; Previous
        </button>
        <center>{state.page}/3</center>
        <button
          disabled={state.page === 3}
          type="button"
          className="btn btn-dark"
          onClick={() => {
            getNextPage();
          }}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}
// disabled={Math.ceil(this.state.page + 1>this.state.totalResults/9)}
