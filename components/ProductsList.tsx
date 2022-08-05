import {IProduct} from 'boundless-api-client';
import {TQuery} from '../@types/common';
import ProductItem from './productsList/ProductItem';
import clsx from 'clsx';

export default function ProductsList({products, query = {}, categoryId, className, itemClassName}: IProductListProps) {
	return (
		<ul className={clsx('products list-unstyled', className)}>
			{products.map(product => (
				<ProductItem
					product={product}
					key={product.product_id}
					query={query}
					categoryId={categoryId}
					className={itemClassName}
				/>
			))}
		</ul>
	);
}

interface IProductListProps {
	products: IProduct[];
	query?: TQuery;
	categoryId?: number;
	className?: string;
	itemClassName?: string;
}