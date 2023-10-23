// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MultipleInputTypes() {
//   const rectangleWidth = 450;
//   const rectangleHeight = 500;
//   const borderRadius = 16;
//   const transparency = 0.8;
//   const horizontalRectangleHeight = 80;
//   const marginTopOffset = 10;

//   const handleFileChange = (event) => {
//     const selectedFiles = event.target.files;
//     // Handle the selected files as needed
//     console.log(selectedFiles);
//   };

//   const handleUrlChange = (event) => {
//     const urlInput = event.target.value;
//     // Handle the URL input as needed
//     console.log(urlInput);
//   };

//   const handleTextChange = (event) => {
//     const textInput = event.target.value;
//     // Handle the text input as needed
//     console.log(textInput);
//   };

//   return (
//     <React.Fragment>
//       <Box
//         sx={{
//           width: rectangleWidth,
//           height: rectangleHeight,
//           backgroundColor: `rgba(153, 153, 153, ${transparency})`,
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%) translateX(-500px)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           borderRadius: `${borderRadius}px`,
//         }}
//       >
//         <Typography variant="h6" sx={{ marginTop: `${marginTopOffset}%`, fontWeight: 'bold' }}>
//           Upload PDF Documents
//         </Typography>
//         <input
//           type="file"
//           accept=".pdf"
//           multiple
//           onChange={handleFileChange}
//           sx={{ marginTop: '10px' }}
//         />
//       </Box>
//       <Box
//         sx={{
//           width: rectangleWidth,
//           height: rectangleHeight,
//           backgroundColor: `rgba(153, 153, 153, ${transparency})`,
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           borderRadius: `${borderRadius}px`,
//         }}
//       >
//         <Typography variant="h6" sx={{ marginTop: `${marginTopOffset}%`, fontWeight: 'bold' }}>
//           Enter URL
//         </Typography>
//         <input
//           type="text"
//           placeholder="Enter URL"
//           onChange={handleUrlChange}
//           sx={{ marginTop: '10px', padding: '8px', width: '80%', boxSizing: 'border-box' }}
//         />
//       </Box>
//       <Box
//         sx={{
//           width: rectangleWidth,
//           height: rectangleHeight,
//           backgroundColor: `rgba(153, 153, 153, ${transparency})`,
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%) translateX(500px)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           borderRadius: `${borderRadius}px`,
//         }}
//       >
//         <Typography variant="h6" sx={{ marginTop: `${marginTopOffset}%`, fontWeight: 'bold' }}>
//           Enter Text
//         </Typography>
//         <input
//           type="text"
//           placeholder="Enter Text"
//           onChange={handleTextChange}
//           sx={{ marginTop: '10px', padding: '8px', width: '80%', boxSizing: 'border-box' }}
//         />
//       </Box>
//       <Button
//         variant="contained"
//         sx={{
//           width: '30%',
//           height: horizontalRectangleHeight,
//           backgroundColor: 'green',
//           position: 'absolute',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           bottom: 20,
//         }}
//       >
//         Submit
//       </Button>
//     </React.Fragment>
//   );
// }
















// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MultipleInputTypes() {
//   const rectangleWidth = 450;
//   const rectangleHeight = 500;
//   const borderRadius = 16;
//   const transparency = 0.8;
//   const horizontalRectangleHeight = 80;
//   const marginTopOffset = 10;

//   const handleFileChange = (event) => {
//     const selectedFiles = event.target.files;
//     // Handle the selected files as needed
//     console.log(selectedFiles);
//   };

//   const handleUrlChange = (event) => {
//     const urlInput = event.target.value;
//     // Handle the URL input as needed
//     console.log(urlInput);
//   };

//   const handleTextChange = (event) => {
//     const textInput = event.target.value;
//     // Handle the text input as needed
//     console.log(textInput);
//   };

//   return (
//     <React.Fragment>
//       <Box
//         sx={{
//           width: rectangleWidth,
//           height: rectangleHeight,
//           backgroundColor: `rgba(153, 153, 153, ${transparency})`,
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%) translateX(-500px)',
//           borderRadius: `${borderRadius}px`,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Box
//           sx={{
//             width: '80%',
//             height: '60%',
//             backgroundColor: 'white',
//             borderRadius: `${borderRadius}px`,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           {/* Your file upload input here */}
//           <Typography variant="h6" sx={{ marginTop: `${marginTopOffset}%`, fontWeight: 'bold' }}>
//             Upload PDF Documents
//           </Typography>
//           <input
//             type="file"
//             accept=".pdf"
//             multiple
//             onChange={handleFileChange}
//             sx={{ marginTop: '10px' }}
//           />
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           width: rectangleWidth,
//           height: rectangleHeight,
//           backgroundColor: `rgba(153, 153, 153, ${transparency})`,
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           borderRadius: `${borderRadius}px`,
//         }}
//       >
//         <Typography variant="h6" sx={{ marginTop: `${marginTopOffset}%`, fontWeight: 'bold' }}>
//           Enter URL
//         </Typography>
//         <input
//           type="text"
//           placeholder="Enter URL"
//           onChange={handleUrlChange}
//           sx={{ marginTop: '10px', padding: '8px', width: '80%', boxSizing: 'border-box' }}
//         />
//       </Box>
//       <Box
//         sx={{
//           width: rectangleWidth,
//           height: rectangleHeight,
//           backgroundColor: `rgba(153, 153, 153, ${transparency})`,
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%) translateX(500px)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           borderRadius: `${borderRadius}px`,
//         }}
//       >
//         <Typography variant="h6" sx={{ marginTop: `${marginTopOffset}%`, fontWeight: 'bold' }}>
//           Enter Text
//         </Typography>
//         <input
//           type="text"
//           placeholder="Enter Text"
//           onChange={handleTextChange}
//           sx={{ marginTop: '10px', padding: '8px', width: '80%', boxSizing: 'border-box' }}
//         />
//       </Box>
//       <Button
//         variant="contained"
//         sx={{
//           width: '30%',
//           height: horizontalRectangleHeight,
//           backgroundColor: 'green',
//           position: 'absolute',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           bottom: 20,
//         }}
//       >
//         Submit
//       </Button>
//     </React.Fragment>
//   );
// }





// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MultipleInputTypes() {
//   const rectangleWidth = 450;
//   const rectangleHeight = 500;
//   const borderRadius = 16;
//   const transparency = 0.8;
//   const horizontalRectangleHeight = 80;
//   const marginTopOffset = 10;

//   const handleFileChange = (event) => {
//     const selectedFiles = event.target.files;
//     // Handle the selected files as needed
//     console.log(selectedFiles);
//   };

//   const handleUrlChange = (event) => {
//     const urlInput = event.target.value;
//     // Handle the URL input as needed
//     console.log(urlInput);
//   };

//   const handleTextChange = (event) => {
//     const textInput = event.target.value;
//     // Handle the text input as needed
//     console.log(textInput);
//   };

//   return (
//     <React.Fragment>
//       <Box
//         sx={{
//           width: rectangleWidth,
//           height: rectangleHeight,
//           backgroundColor: `rgba(153, 153, 153, ${transparency})`,
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%) translateX(-500px)',
//           borderRadius: `${borderRadius}px`,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Box
//           sx={{
//             width: '80%',
//             height: '80%',
//             backgroundColor: 'white',
//             borderRadius: `${borderRadius}px`,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           {/* Your file upload input here */}
//           <Typography variant="h6" sx={{ marginTop: `${marginTopOffset}%`, fontWeight: 'bold' }}>
//             Upload PDF Documents
//           </Typography>
//           <input
//             type="file"
//             accept=".pdf"
//             multiple
//             onChange={handleFileChange}
//             sx={{ marginTop: '10px' }}
//           />
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           width: rectangleWidth,
//           height: rectangleHeight,
//           backgroundColor: `rgba(153, 153, 153, ${transparency})`,
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           borderRadius: `${borderRadius}px`,
//         }}
//       >
//         <Box
//           sx={{
//             width: '80%',
//             height: '80%',
//             backgroundColor: 'white',
//             borderRadius: `${borderRadius}px`,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           {/* Your URL input here */}
//           <Typography variant="h6" sx={{ marginTop: `${marginTopOffset}%`, fontWeight: 'bold' }}>
//             Enter URL
//           </Typography>
//           <input
//             type="text"
//             placeholder="Enter URL"
//             onChange={handleUrlChange}
//             sx={{ marginTop: '10px', padding: '8px', width: '80%', boxSizing: 'border-box' }}
//           />
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           width: rectangleWidth,
//           height: rectangleHeight,
//           backgroundColor: `rgba(153, 153, 153, ${transparency})`,
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%) translateX(500px)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           borderRadius: `${borderRadius}px`,
//         }}
//       >
//         <Box
//           sx={{
//             width: '80%',
//             height: '80%',
//             backgroundColor: 'white',
//             borderRadius: `${borderRadius}px`,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           {/* Your text input here */}
//           <Typography variant="h6" sx={{ marginTop: `${marginTopOffset}%`, fontWeight: 'bold' }}>
//             Enter Text
//           </Typography>
//           <input
//             type="text"
//             placeholder="Enter Text"
//             onChange={handleTextChange}
//             sx={{ marginTop: '10px', padding: '8px', width: '80%', boxSizing: 'border-box' }}
//           />
//         </Box>
//       </Box>
//       <Button
//         variant="contained"
//         sx={{
//           width: '30%',
//           height: horizontalRectangleHeight,
//           backgroundColor: 'green',
//           position: 'absolute',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           bottom: 20,
//         }}
//       >
//         Submit
//       </Button>
//     </React.Fragment>
//   );
// }


















// import styles from "../styles";
// import { discount, robot } from "../assets";
// import GetStarted from "./GetStarted";

// const Hero = () => {
//   return (
//     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
//         <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
//           <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
//           <p className={`${styles.paragraph} ml-2`}>
//             <span className="text-white">20%</span> Discount For{" "}
//             <span className="text-white">1 Month</span> Account
//           </p>
//         </div>

//         <div className="flex flex-row justify-between items-center w-full">
//           <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
//             The Next <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">Generation</span>{" "}
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr-0">
//             <GetStarted />
//           </div>
//         </div>

//         <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
//           Payment Method.
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Our team of experts uses a methodology to identify the credit cards
//           most likely to fit your needs. We examine annual percentage rates,
//           annual fees.
//         </p>
//       </div>

//       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//         <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

//         {/* gradient start */}
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//         {/* gradient end */}
//       </div>

//       <div className={`ss:hidden ${styles.flexCenter}`}>
//         <GetStarted />
//       </div>
//     </section>
//   );
// };

// export default Hero;













import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MultipleInputTypes() {
  const rectangleWidth = 450;
  const rectangleHeight = 500;
  const borderRadius = 16;
  const transparency = 0.8;
  const horizontalRectangleHeight = 80;

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    // Handle the selected files as needed
    console.log(selectedFiles);
  };

  const handleUrlChange = (event) => {
    const urlInput = event.target.value;
    // Handle the URL input as needed
    console.log(urlInput);
  };

  const handleTextChange = (event) => {
    const textInput = event.target.value;
    // Handle the text input as needed
    console.log(textInput);
  };

  const whiteBoxStyles = [
    {
      width: '80%',
      height: '80%',
      backgroundColor: 'white',
      borderRadius: `${borderRadius}px`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%', // Adjust the margin offset for the first white box
    },
    {
      width: '80%',
      height: '80%',
      backgroundColor: 'white',
      borderRadius: `${borderRadius}px`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10%', // Adjust the margin offset for the second white box
    },
    {
      width: '80%',
      height: '80%',
      backgroundColor: 'white',
      borderRadius: `${borderRadius}px`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '15%', // Adjust the margin offset for the third white box
    },
  ];

  return (
    <React.Fragment>
      <Box
        sx={{
          width: rectangleWidth,
          height: rectangleHeight,
          backgroundColor: `rgba(153, 153, 153, ${transparency})`,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) translateX(-500px)',
          borderRadius: `${borderRadius}px`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={whiteBoxStyles[0]}>
          {/* Your file upload input here */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Upload PDF Documents
          </Typography>
          <input
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileChange}
            sx={{ marginTop: '5px', padding: '8px', width: '80%', boxSizing: 'border-box' }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: rectangleWidth,
          height: rectangleHeight,
          backgroundColor: `rgba(153, 153, 153, ${transparency})`,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: `${borderRadius}px`,
        }}
      >
        <Box sx={whiteBoxStyles[1]}>
          {/* Your URL input here */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Enter URL
          </Typography>
          <input
            type="text"
            placeholder="Enter URL"
            onChange={handleUrlChange}
            sx={{ marginTop: '10px', padding: '8px', width: '80%', boxSizing: 'border-box' }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: rectangleWidth,
          height: rectangleHeight,
          backgroundColor: `rgba(153, 153, 153, ${transparency})`,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) translateX(500px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: `${borderRadius}px`,
        }}
      >
        <Box sx={whiteBoxStyles[2]}>
          {/* Your text input here */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Enter Text
          </Typography>
          <input
            type="text"
            placeholder="Enter Text"
            onChange={handleTextChange}
            sx={{ marginTop: '10px', padding: '8px', width: '80%', boxSizing: 'border-box' }}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: '30%',
          height: horizontalRectangleHeight,
          backgroundColor: 'green',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 20,
        }}
      >
        Summarize
      </Button>
    </React.Fragment>
  );
}
