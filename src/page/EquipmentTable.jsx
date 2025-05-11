import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const EquipmentTable = ({equipment,idx}) => {
  const navigate = useNavigate()
    const {_id,name,category,price} = equipment;
    
    const handleDetails = (id) =>{
      navigate(`/equipment/${id}/details`)
    }
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>
            <button onClick={()=>handleDetails(_id)} className="bg-[#273248] hover:text-[#273248] hover:bg-red-400  px-4 py-2 rounded text-white">Details</button>
        </td>
      </tr>
    </>
  );
};

EquipmentTable.propTypes = {
    equipment: PropTypes.object.isRequired,
    idx: PropTypes.string.isRequired
};

export default EquipmentTable;