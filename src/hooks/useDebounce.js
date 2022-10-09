import { useMemo } from "react";
import {debounce} from "lodash";

export default function useDebounce(value, delay) {
    return useMemo(() => debounce(value, delay), [value, delay]);
    }   