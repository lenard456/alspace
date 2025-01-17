import { Collapse } from 'antd'

const { Panel } = Collapse

function callback(key) {
    console.log(key);
  }
  
const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
`;

export default function()
{
    return (
        <div className='max-w-lg mx-auto my-8'>
            <div className='mx-4 text-center text-gray-900 space-y-2 sm:space-y-4'>
                <div className='font-bold'>FAQs</div>
                <div className='text-xl sm:text-3xl font-serif'>Frequently Asks Questions</div>
                <div className='text-gray-600'>Have questions? We're here to help.</div>

            </div>

            <Collapse className='my-8' onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
                </Panel>
            </Collapse>

            <div className='text-center'>
                <div className='font-bold'>Still have questions?</div>
                <div className='mx-4 text-gray-600'>Can't find the answer you're looking for? Please chat to our friendly team.</div>
            </div>

        </div>
    )
}