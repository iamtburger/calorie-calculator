import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
	return (
		<Box textAlign="center" marginTop="5px">
			<Typography variant="subtitle2">
				<Link
					target="_blank"
					href="https://icons8.com/icon/8rgAxHlOyvoE/dumbbell"
				>
					Dumbbell
				</Link>{" "}
				icon by{" "}
				<Link target="_blank" href="https://icons8.com">
					Icons8
				</Link>
			</Typography>
			<Typography variant="subtitle2">
				Photo by{" "}
				<Link href="https://unsplash.com/@pedroaraujo74?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Pedro Araújo
				</Link>{" "}
				on{" "}
				<Link href="https://unsplash.com/s/photos/gym?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Unsplash
				</Link>
			</Typography>
		</Box>
	);
};

export default Footer;
