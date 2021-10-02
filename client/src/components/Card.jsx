import deleteIcon from "../icons/delete.svg";
import updateIcon from "../icons/update.svg";
import eyeIcon from "../icons/eye.svg";
import { toast } from "react-toastify";
import axios from "axios";

const Card = ({
  id,
  imgURL,
  title,
  price,
  fetchDatas,
  setCardDetailsModal,
  setCurrentCardId,
  setCardUpdateModal,
}) => {
  // delete method for card
  const deleteCard = async (id) => {
    try {
      await axios({
        method: "DELETE",
        url: `http://localhost:8000/api/card//deleteCard/${id}`,
      });

      // toast library for notifications
      toast.success("Data deleted successfully!", {
        className: "toast",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      fetchDatas();
    } catch (err) {
      toast.error("Error occured, please try again.", {
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

  return (
    <>
      <div className="update-delete-details">
        <div
          className="icon-container"
          onClick={() => {
            deleteCard(id);
          }}
        >
          <img src={deleteIcon} alt="delete-icon" />
        </div>
        <div
          className="icon-container"
          onClick={() => {
            setCardDetailsModal(true);
            setCurrentCardId(id);
          }}
        >
          <img src={eyeIcon} alt="details-icon" />
        </div>
        <div
          className="icon-container"
          onClick={() => {
            setCardUpdateModal(true);
            setCurrentCardId(id);
          }}
        >
          <img src={updateIcon} alt="update-icon" />
        </div>
      </div>
      <img src={imgURL} alt="img" />
      <div className="title-price">
        <div className="title">
          {title.length > 12 ? title.substr(0, 10) + "..." : title}
        </div>
        <div className="price">
          {price.toString().length > 4
            ? price.toString().substr(0, 2) + "..."
            : price}
          $
        </div>
      </div>
    </>
  );
};

export default Card;
