import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { AiFillApi } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     Blabla
   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem"/>
       <ListContainer>
         <ListTitle>Front-end</ListTitle>
         <ListParagraph>
           Experience With <br />
           React.js
         </ListParagraph>
       </ListContainer>
     </ListItem>
    <ListItem>
       <DiFirebase size="3rem"/>
       <ListContainer>
         <ListTitle>Back-end</ListTitle>
         <ListParagraph>
           Experience With <br />
           Node.js and Databases
         </ListParagraph>
       </ListContainer>
     </ListItem>
          <ListItem>
       <AiFillApi size="3rem"/>
       <ListContainer>
         <ListTitle>API</ListTitle>
         <ListParagraph>
           RapidAPi <br />
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
