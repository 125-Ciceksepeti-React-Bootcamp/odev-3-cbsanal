import { useState, useEffect, useRef } from "react";
import axios from "axios";
import close from "../icons/close.svg";
import { toast } from "react-toastify";

const CardUpdate = ({ setCardUpdateModal, currentCardId, fetchDatas }) => {
  const [data, setData] = useState(null);
  const photoURL = useRef(null);
  const title = useRef(null);
  const price = useRef(null);
  const explanation = useRef(null);

  const updateItem = async (e) => {
    e.preventDefault(e);
    try {
      // checking if photo url is valid by sending get request
      await axios(photoURL.current.value);

      // if it is valid then you can update the product
      await axios({
        method: "PATCH",
        url: `http://localhost:8000/api/card/updateCard/${currentCardId}`,
        data: {
          photoURL: photoURL.current.value,
          title: title.current.value,
          price: price.current.value,
          explanation: explanation.current.value,
        },
      });
      // used toast library for notifications
      toast.success("Data updated successfully!", {
        className: "toast",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // after updating, fetch all the datas from database again
      fetchDatas();
      setCardUpdateModal(false);
      bodyFixed("unfixed");
    } catch (err) {
      toast.warn("Please enter valid image address", {
        className: "toast",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // to prevent user scroll while modal is open
  const bodyFixed = (status) => {
    const body = document.querySelector("body");
    if (status === "fixed") {
      body.style.position = "fixed";
      body.style.width = "100%";
    } else {
      body.style.position = "relative";
    }
  };
  useEffect(() => {
    // get info of one card
    const getCardInfo = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/card/oneCard/${currentCardId}`
      );
      setData(res.data.card[0]);
    };
    getCardInfo();
    bodyFixed("fixed");
  }, [currentCardId]);
  return (
    <section className="item-update-modal">
      <img
        className="close-icon"
        src={close}
        alt="close-icon"
        onClick={() => {
          setCardUpdateModal(false);
          bodyFixed("unfixed");
        }}
      />
      {data && (
        <div className="item-container">
          <div className="title">Item Update</div>
          <form onSubmit={(e) => updateItem(e)}>
            <div>
              <label htmlFor="imgUrl">İmage URL: </label>
              <input
                type="text"
                defaultValue={data.photoURL}
                ref={photoURL}
                required
              />
            </div>
            <div>
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                defaultValue={data.title}
                ref={title}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Price: </label>
              <input
                type="text"
                defaultValue={data.price}
                ref={price}
                required
              />
            </div>
            <div>
              <label htmlFor="explanation">Explanation: </label>
              <textarea
                defaultValue={data.explanation}
                id="explanation"
                cols="30"
                rows="5"
                ref={explanation}
                required
              ></textarea>
            </div>
            <div className="btn-wrapper">
              <button className="item-btn update-btn">Update the item</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default CardUpdate;
