import React, {ReactNode} from 'react';
import clsx from 'clsx';

export default function TextWithIcons({columns, fullWidth = false, className}: IProps) {
	return (
		<div className={clsx(
			'text-with-icons',
			{'text-with-icons_bg': fullWidth},
			className
		)}>
			{fullWidth
				? <div className={'container-xxl'}>
					<Columns columns={columns} />
				</div>
				: <Columns columns={columns} />
			}
		</div>
	);
}

const Columns = ({columns}: {columns: IColumn[]}) => {
	return (
		<div className={'text-with-icons__columns'}>
			{columns.map((column, i) =>
				<div className={'text-with-icons__column'}
						 key={i}
				>
					<div className={'text-with-icons__head-wrap'}>
						<div className={'text-with-icons__icon-wrap'}>
							{column.icon}
						</div>
						<h4 className={'text-with-icons__col-title'}>{column.title}</h4>
					</div>
					{column.comment &&
					<div
						className={'text-with-icons__col-body'}
						dangerouslySetInnerHTML={{__html: column.comment}}
					/>}
				</div>
			)}
		</div>
	);
};

interface IProps {
	columns: IColumn[],
	fullWidth?: boolean,
	className?: string,
}

interface IColumn {
	icon: ReactNode,
	title: string;
	comment?: string;
}