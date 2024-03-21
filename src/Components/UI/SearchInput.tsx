import styled from "styled-components"
import Input from "./Input";
import { SearchIcon } from "../../icons/icons";
import { ChangeEvent, HTMLAttributes, useState } from "react";


const StyledInput = styled(Input)`
    &::placeholder {
        text-align: center;
    }
    padding-left: 50px;
`

const StyledSearchIconWrapper = styled.div`
    cursor: text;

    display: inline-flex;
    position: absolute;

    left: calc((100% - 425px) / 2 + 40px);
    margin-top: 11px;

    width: 100%;
    transition: all .1s;

    svg {
        width: 22px;
        height: 22px;
    }

    @media (max-width: 425px) {
        left: 40px;
    }
`

const PlaceholderWrapper = styled.div`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
    left: 0; 
    right: 0; 
    
    width: 100%;
    margin-top: -35px;

    user-select: none;
    cursor: text;

    span {
        transition: color .09s;
        opacity: .5;
        font-size: 18px;
        font-weight: 399;
    }

    svg {
        transition: all .3s;
        width: 22px;
        height: 22px;
    }
`

function SearchPlaceholder(props: HTMLAttributes<HTMLElement>) {
    return (
        <PlaceholderWrapper {...props}>
            <SearchIcon />
            <span>Search</span>
        </PlaceholderWrapper>
    )
}
function SearchInput() {
    const [TextValue, SetTextValue] = useState("");

    const SetFocusInput = () => {
        document.getElementById("search")?.focus();
        document.getElementById("searchPlaceholder")?.classList.add("searchClicked")
        document.getElementById("newSearchIcon")?.classList.remove("hidden")
    }

    const RemoveFocusInput = () => {
        document.getElementById("search")?.blur();
    
        SetTextValue("")
        document.getElementById("newSearchIcon")?.classList.add("hidden");
        document.getElementById("searchPlaceholder")?.classList.remove("searchClicked")
    }

    return (
        <>
            <>
            <StyledInput 
                type="text" 
                aria-label="Search" aria-disabled="false"
                autoCapitalize="none" dir="ltr" 
                tabIndex={0} spellCheck id="search"
                onClick={() => SetFocusInput()}
                onBlur={() => RemoveFocusInput()}
                value={TextValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) => SetTextValue(e.currentTarget.value)}
            />
            </>
            <SearchPlaceholder
                id="searchPlaceholder"
                onClick={() => SetFocusInput()}    
            />
            <StyledSearchIconWrapper
                id="newSearchIcon"
                className="hidden"
                onClick={() => SetFocusInput()}
            >
                <SearchIcon />
            </StyledSearchIconWrapper>
        </>
    )
}

export default SearchInput;