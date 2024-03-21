import styled from "styled-components";
import Section from "../UI/Section";
import HistoryList from "../UI/HistoryList";
import IHistory from "../../interfaces/IHistory";
import SearchInput from "../UI/SearchInput";
import CenterDiv from "../UI/CenterDiv";


const MainStyled = styled.main`
  display: flex;
  flex-direction: column;

  gap: 20px;

  width: 100%;
  height: 100dvh;
  max-width: 425px;

  margin: 0 auto;

  section:nth-child(1) {
    margin-top: 40px;
  }
`
const objs: Array<IHistory> = [
  {
      id: 1,
      userId: 1245,
      url: "",
      active: true,
      preview: "https://sun9-66.userapi.com/impg/1KkEbdG5FZtEzq4MfTdb6IIJF1pSArp2PSGGTg/-qXkOT3SpTY.jpg?size=1617x2160&quality=95&sign=00f60aada3d4dac1dc301fa24dd19393&type=album",
  },
  {
    id: 2,
    userId: 1245,
    url: "",
    active: true,
    preview: "https://sun9-66.userapi.com/impg/1KkEbdG5FZtEzq4MfTdb6IIJF1pSArp2PSGGTg/-qXkOT3SpTY.jpg?size=1617x2160&quality=95&sign=00f60aada3d4dac1dc301fa24dd19393&type=album",
  },
  {
    id: 3,
    userId: 1246,
    url: "",
    active: true,
    preview: "https://img.freepik.com/free-photo/portrait-of-white-man-isolated_53876-40306.jpg",
  },
  {
    id: 4,
    userId: 1246,
    url: "",
    active: false,
    preview: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    userId: 1246,
    url: "",
    active: false,
    preview: "https://sun9-66.userapi.com/impg/1KkEbdG5FZtEzq4MfTdb6IIJF1pSArp2PSGGTg/-qXkOT3SpTY.jpg?size=1617x2160&quality=95&sign=00f60aada3d4dac1dc301fa24dd19393&type=album",
  },
  {
    id: 6,
    userId: 1246,
    url: "",
    active: false,
    preview: "https://sun9-66.userapi.com/impg/1KkEbdG5FZtEzq4MfTdb6IIJF1pSArp2PSGGTg/-qXkOT3SpTY.jpg?size=1617x2160&quality=95&sign=00f60aada3d4dac1dc301fa24dd19393&type=album",
  },
]

function Main() {
  return (
    <MainStyled>
      <Section 
        title="Histories"
        linkText="add new"
        href="#"
      >
        <HistoryList histories={objs} />
      </Section>

      <Section 
        title="Messages"
        linkText="write now"
        href="#"
      >
        <CenterDiv>
          <SearchInput />
        </CenterDiv>
      </Section>
    </MainStyled>
  )
}

export default Main