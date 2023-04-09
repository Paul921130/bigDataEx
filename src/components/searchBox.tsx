import React from "react";
import styles from "./searchBox.module.css";
import citys from "../static/citys";
import years from "../static/years";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SearchBox = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const render_menu = (type?: string) => {
        switch (type) {
            case "years":
                return years.map((item, i) => (
                    <MenuItem key={i} value={item}>
                        {item}
                    </MenuItem>
                ));
                break;
            case "citys":
                return citys.map((item, i) => (
                    <MenuItem key={i} value={item}>
                        {item}
                    </MenuItem>
                ));
                break;
            default:
                break;
        }
    };
    const year_menu = () => {
        return years.map((item, i) => (
            <MenuItem key={i} value={item}>
                {item}
            </MenuItem>
        ));
    };
    const citys_menu = () => {
        return citys.map((item, i) => (
            <MenuItem key={i} value={item}>
                {item}
            </MenuItem>
        ));
    };
    return (
        <div>
            <h1>人口數、戶數按戶別及性別統計</h1>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label-01">
                        年份
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label-01"
                        id="demo-simple-select-01"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        {render_menu("years")}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label-01">
                        縣/市
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label-01"
                        id="demo-simple-select-01"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        {render_menu("citys")}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label-01">區</InputLabel>
                    <Select
                        labelId="demo-simple-select-label-01"
                        id="demo-simple-select-01"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};
export default SearchBox;
