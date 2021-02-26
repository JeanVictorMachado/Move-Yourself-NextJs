import styled from 'styled-components';

export const ContainerMain = styled.main`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`

export const SectionLeft = styled.section`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;

    > section {
      margin-bottom: 2rem;
    }
  }
`
