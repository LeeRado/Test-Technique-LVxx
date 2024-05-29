import "./style.css"
import { fakedata } from "../../common/fakedata"
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa"

export const Categorieswrapper = () => {

  const [data, setData] = useState(fakedata)
  const [childre, setChildren] = useState([])
  const [double, setDouble] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showBtn, setShowBtn] = useState(false)


  const add = () => {

    setData([...data, { label: '' }])
  }
  const addChildren = () => {
    setChildren([...childre, { label: '' }])
  }

  const handlechange = (e, index, item) => {
    const { value } = e.target;
    const list = [...data];
    list[index].label = value
    if (!item.children) {
      setData(list)
    } else if (double) {
      setData(list)
    }
  }

  const handlechangeSublist = (e, index) => {
    const { value } = e.target;
    const list = [...childre];
    list[index].label = value
    setChildren(list)
  }

  const showChildren = (item) => {
    console.log("itemsss", item);
    setShowBtn(true)
    if (item?.children?.length > 0) {
      setChildren(item.children)
    } else {
      setChildren([])
    }
  }

  const handleDoubleClick = () => {
    setShowEdit(!showEdit)
  }

  const handleEdit = () => {
    setDouble(!double)
  }

  const onDelete = (index) => {
    console.log("aaaaaa", data, index);
    const newItems = [...data]
    newItems.splice(index, 1)
    setData(newItems)
    // data.splice(index)
  }


  return (
    <div className="flex">
      <div className="content">
        <h1>Rubrique</h1>
        {data?.map((item, index) => (
          <div key={index} className="input_contain">
            <input type="text" value={item.label} className="input_type" onChange={(e) => handlechange(e, index, item)} onClick={() => showChildren(item)} onDoubleClick={handleDoubleClick} />
            <div className="icon">
              <FaTrash onClick={() => onDelete(index)} />
            </div>
            {showEdit && (
              <div className="icon">
                <FaEdit onClick={handleEdit} />
              </div>
            )
            }
          </div>
        ))}
        <div className="btn-contain">
          <button className="btn" onClick={add}>Ajouter</button>
        </div>
      </div>
      <div className="content">
        <h1 >Sous rubrique</h1>
        {childre && childre?.map((item, index) => (
          <div key={index} className="input_contain">
            <input type="text" value={item.label} className="input_type" onChange={(e) => handlechangeSublist(e, index)} />
          </div>
        ))}

        <div className="btn-contain">
          {showBtn && (
            <button className="btn" onClick={addChildren}>Ajouter</button>
          )}
        </div>
      </div>
    </div>
  )
}
