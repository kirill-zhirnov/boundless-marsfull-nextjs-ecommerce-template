import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IMenuItem} from '../@types/components';
import MainLayout from '../layouts/Main';

export default function ShippingPage({mainMenu, footerMenu}: IPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>About</h1>
				<div className='text-container'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipiscing elit semper penatibus purus, neque sodales fames
						pellentesque luctus fringilla libero dis ornare cursus sociosqu, elementum commodo efficitur mauris dictum
						tortor per ultricies a. Venenatis turpis eleifend proin a dapibus ullamcorper conubia odio vel, porta nulla
						gravida habitasse facilisi quisque class non aliquam velit, donec nostra amet ante montes ad varius mauris.
						Maecenas urna laoreet sociosqu tempus rutrum quis ad diam, habitant morbi augue ornare orci a suscipit faucibus,
						felis nostra senectus at mollis et gravida. Tempus nulla nec etiam mollis, duis lacinia dictum netus,
						dignissim mi facilisis. Euismod gravida mollis integer class convallis lacinia ad, elit id pharetra ac
						bibendum iaculis augue lorem, purus at scelerisque posuere dictumst dis. Risus eleifend maecenas cras ac
						conubia proin nisl, ultrices mollis sem et molestie dolor facilisis, venenatis neque eget maximus quis per.
						Ante vehicula interdum pulvinar sodales faucibus, metus dignissim orci habitasse. Id dui in amet vehicula luctus
						lobortis facilisi gravida dis litora diam sapien eget, tortor semper erat turpis pretium odio tempor porta
						vestibulum mauris congue.
					</p>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			...menus
		}
	};
};

interface IPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}