import React, {ReactNode} from 'react';
import clsx from 'clsx';

export default function Reviews({reviews, className}: IProps) {
	return (
		<div className={clsx('reviews', className)}>
			<ReviewsList reviews={reviews} />
		</div>
	);
}

const ReviewsList = ({reviews}: {reviews: IReview[]}) => {
	return (
		<>
			{reviews.map((review, i) =>
				<div className={'reviews__item'} key={i}>
					<div className={'reviews__img-wrap'}>
						{review.image}
					</div>
					<p className={'reviews__title'}>{review.title}</p>
					{review.jobTitle &&
					<p className={'reviews__job-title'}>{review.jobTitle}</p>}
					{review.comment &&
					<div className={'reviews__comment'}
							 dangerouslySetInnerHTML={{__html: review.comment}}
					/>}
				</div>
			)}
		</>
	);
};

interface IProps {
	reviews: IReview[],
	className?: string,
}

interface IReview {
	image: ReactNode,
	title: string;
	jobTitle?: string;
	comment?: string;
}