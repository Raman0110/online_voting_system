type Props = {}

const CandidateViewCard = (props: Props) => {
  return (
    <div className="flex items-center h-[500px] bg-red-600 my-8">
      <div className=" bg-white w-[60%]">
        <img src="./kp.png" alt="" className="h-[500px] object-cover" />
      </div>
      <div className=" bg-red-500"></div>
    </div>
  )
}

export default CandidateViewCard;
