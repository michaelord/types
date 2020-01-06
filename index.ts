// Content Types

export type Loading = 'lazy' | 'eager' | 'auto';

// https://www.advancedcustomfields.com/resources/#field-types/
export type WYSIWYG = string;
export type RichText = string;
export type Text = string;
export type Image = {
	width?: Number;
	height?: Number;
	src: string;
	alt?: string;
	color?: Color;
	loading?: Loading;
};
export type Icon = Image;
export type TextArea = string;
export type Range = number;
export type Checkbox = {};
export type Number = number;
export type Option = {
	value: string;
	label: string;
};
export type Radio = Option;
export type Select = Array<Option>;
export type TrueFalse = boolean;
export type File = {
	src: string;
};
export type Gallery = Array<Image>;
export type oEmbed = {};
export type Children = React.ReactNode;
export type ClassName = string;

export type Color = string;

export type Ratio = string | number;

// colourpicker
// date picker
// google map
// datetime picker
// time picker
// accordion
// flexible content
// clone
// group
// repeater
// tab

export type Url = string;
export type ID = string;

export type Link = {
	href: Url;
	label: string;
};
export type PageLink = {};
export type User = {};
export type Relationship = {};
export type Taxonomy = {};

// Others

export type vAlign = 'top' | 'center' | 'bottom';
export type hAlign = 'left' | 'center' | 'right';
export type Feedback = 'error' | 'success' | 'default' | 'warning' | 'info';
export type Padding = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Size = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type Priority = 'default' | 'primary' | 'secondary' | 'tertiary';
export type Align = 'left' | 'center' | 'right';
export type Heading = 1 | 2 | 3 | 4 | 5 | 6;
export type Theme = 'default' | 'primary' | 'dark' | 'light' | 'grey';
export type Accent = 'default' | 'green' | 'red' | undefined;
export type Animation = 'none' | 'scale' | 'blur' | 'opacity';
