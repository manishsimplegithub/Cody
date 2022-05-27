import React from "react";
import "./Browse.css";
import "../../config";
// import 'bootstrap/dist/css/bootstrap.min.css';

function BrowsePlatform() {
  return (
    <>
      <div className="card manish">
        <div className="container">
          <div className="top-card">
            <div className="header-card card mohan">
              <h1 className="header-text"> Browse Platform </h1>
              <div className="search-items">
                <input
                  type="text"
                  placeholder="Browse Platforms"
                  className="search-field form-control"
                />
                <button type="button" className="search-button btn btn-primary">
                  Search
                </button>
              </div>
            </div>
            <div>
              <div class="row card-row">
                <div class="col-md-10 col-md-4">
                  <div className="card-3">
                    <div class="card card-container">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDmFriY1hIqUOtkQkyZyU4QTZ2STIowwycA&usqp=CAU"
                        alt=""
                      />
                      <div className="card-body">
                        <h3 className="h3-card"> Product 1 </h3>
                        <p>This is the description of the first product</p>
                        <button class=" btn btn-primary" type="button">
                          More Details
                        </button>
                      </div>
                    </div>
                    <div class="card card-container">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSBQfC0-pZ2I5CmE8Fu-XCfrsS2FAs7v8XQ&usqp=CAU"
                        alt=""
                      />
                      <div className="card-body">
                        <h3 className="h3-card"> Product 1 </h3>
                        <p>This is the description of the first product</p>
                        <button class=" btn btn-primary" type="button">
                          More Details
                        </button>
                      </div>
                    </div>
                    <div class="card card-container">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1FnvJn02LnMqwb9tgXsWNMCUMvBwFeieGA&usqp=CAU"
                        alt=""
                      />
                      <div className="card-body">
                        <h3 className="h3-card"> Product 1 </h3>
                        <p>This is the description of the first product</p>
                        <button class=" btn btn-primary" type="button">
                          More Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row card-row">
                <div class="col-md-10 col-md-4">
                  <div className="card-3">
                    <div class="card card-container">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY24WInrmGrXwA4X2Y3ijMKBoYW7X8RgLUw&usqp=CAU"
                        alt=""
                      />
                      <div className="card-body">
                        <h3 className="h3-card"> Product 1 </h3>
                        <p>This is the description of the first product</p>
                        <button class=" btn btn-primary" type="button">
                          More Details
                        </button>
                      </div>
                    </div>
                    <div class="card card-container">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iZ5rkd_AHmRVHv0XKsuq0ZgG0SR8QZZmyQ&usqp=CAU"
                        alt=""
                      />
                      <div className="card-body">
                        <h3 className="h3-card"> Product 1 </h3>
                        <p>This is the description of the first product</p>
                        <button class=" btn btn-primary" type="button">
                          More Details
                        </button>
                      </div>
                    </div>
                    <div class="card card-container">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8UvF2Rv_WolQpx8IjGqQdbMDLVIN69AcCQ&usqp=CAU"
                        alt=""
                      />
                      <div className="card-body">
                        <h3 className="h3-card"> Product 1 </h3>
                        <p>This is the description of the first product</p>
                        <button class=" btn btn-primary" type="button">
                          More Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="content-main">
        <div className="content-card card ">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTgwZGQ0YWI3ZjQgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xODBkZDRhYjdmNCI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NjQ1OTkyMjc5MDUyNyIgeT0iMTA1LjI1OTIzNDgwOTg3NTUiPjI0MngyMDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
            alt=""
          />

          <hr/>
          <p>
            Lorem Ipsum is simply dummy text
          </p>
          <p>
            Lorem Ipsum is simply dummy text 
          </p>
          <p>
            Lorem Ipsum is simply dummy text 
          </p>
        </div>
        <div className="content-card card ">
          <p>
            Lorem Ipsum is simply dummy text
          </p>
          <p>
            Lorem Ipsum is simply dummy text
          </p>
          <p>
            Lorem Ipsum is simply dummy text
          </p>
        </div>
        </div>
        <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTgwZGQ0YWI3ZjQgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xODBkZDRhYjdmNCI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NjQ1OTkyMjc5MDUyNyIgeT0iMTA1LjI1OTIzNDgwOTg3NTUiPjI0MngyMDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
            alt=""
          /> */}
    </>
  );
}

export default BrowsePlatform;
