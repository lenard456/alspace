import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd'
import { 
    MessageOutlined, 
    BellOutlined,
    QuestionCircleOutlined,
    CalendarOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    HomeOutlined
} from '@ant-design/icons'
import { BriefcaseOutlined } from '@/js/components/icons'
import Item from './SidebarItem'
import { useAuthState } from '@/js/states'
import useApi from '@/js/hooks/useApi'
import { AuthApi } from '@/js/apis'

export default function()
{
    const { execute, navigate, message } = useApi(AuthApi.logout)
    const { dispatch } = useAuthState()

    const logout = () => {
        Modal.confirm({
            title: 'Are you sure to Logout?',
            async onOk() {
                await execute()
                dispatch('LOGOUT')
                navigate('/login')
                message.success('Logout successfully')
            }
        })
    }

    return (
        <div className='hidden lg:block max-h-full -ml-4 self-start sticky top-[54px]'>
            <div className='py-4'>
                <div className='flex flex-col'>

                    <Item 
                        to='/'
                        title="Discussion" 
                        icon={<HomeOutlined style={{fontSize: '1.375rem'}}/>} 
                    /> 

                    <Item 
                        to='/message'
                        title="Message" 
                        icon={<MessageOutlined style={{fontSize: '1.375rem'}}/>} 
                    />

                    <Item 
                        to="/notifications"
                        title="Notifications" 
                        icon={<BellOutlined style={{fontSize: '1.375rem'}}/>} 
                    />

                    <Item 
                        to="/questions"
                        title="Questions" 
                        icon={<QuestionCircleOutlined style={{fontSize: '1.375rem'}}/>} 
                    />

                    <Item 
                        to="/jobs"
                        title="Jobs" 
                        icon={<BriefcaseOutlined style={{fontSize: '1.375rem'}}/>} 
                    />

                    <Item 
                        to='/events'
                        title="Event" 
                        icon={<CalendarOutlined style={{fontSize: '1.375rem'}}/>} 
                    />

                    <Item 
                        to='/profile'
                        title="Profile" 
                        icon={<UserOutlined style={{fontSize: '1.375rem'}}/>} 
                    />

                    <Item 
                        to='/settings'
                        title="Settings" 
                        icon={<SettingOutlined style={{fontSize: '1.375rem'}}/>} 
                    />

                    <Item 
                        onClick={logout}
                        title="Logout" 
                        icon={<LogoutOutlined style={{fontSize: '1.375rem'}}/>} 
                    />

                </div>

            </div>
        </div>
    )
}