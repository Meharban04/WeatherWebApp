import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"


const Forecast = ({data}) =>{
    return (
    <>
        <label className = "title"> </label>
        <Accordion allowZeroExpanded>
            {/* {data.list.splice(0, 7).map((item, idx)=> (
            <AccordionItem key = {idx}>
                <AccordionItemHeading> 
                    <AccordionItemButton>
                        Hello
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
        ))} */}
        </Accordion>
    </>
    );
};

export default Forecast