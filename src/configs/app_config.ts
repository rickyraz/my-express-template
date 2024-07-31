import * as dotenv from "dotenv";

dotenv.config({
	path:
		process.env.NODE_ENV === "development"
			? ".env.development"
			: process.env.NODE_ENV === "production"
				? ".env.production"
				: ".env.local",
});
