import React from 'react'

import propTypes from '@dhis2/prop-types'
import { Field, SingleSelect, Box } from '@dhis2/ui-core'
import { sharedPropTypes } from '@dhis2/ui-constants'

/**
 * @module
 *
 * @param {SingleSelectField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SingleSelectField } from '@dhis2/ui-widgets'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/singleselectfield--default|Storybook}
 */
class SingleSelectField extends React.Component {
    render() {
        const {
            className,
            onChange,
            onFocus,
            onBlur,
            required,
            label,
            valid,
            error,
            warning,
            disabled,
            loading,
            selected,
            tabIndex,
            helpText,
            validationText,
            maxHeight,
            inputMaxHeight,
            inputWidth,
            children,
            clearable,
            clearText,
            filterable,
            filterPlaceholder,
            placeholder,
            prefix,
            empty,
            loadingText,
            noMatchText,
            initialFocus,
            dense,
            dataTest,
        } = this.props

        return (
            <Field
                className={className}
                dataTest={dataTest}
                name={name}
                disabled={disabled}
                required={required}
                label={label}
                helpText={helpText}
                validationText={validationText}
                error={error}
                warning={warning}
                valid={valid}
            >
                <Box width={inputWidth} minWidth="100px">
                    <SingleSelect
                        selected={selected}
                        tabIndex={tabIndex}
                        maxHeight={maxHeight}
                        inputMaxHeight={inputMaxHeight}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        loading={loading}
                        error={error}
                        warning={warning}
                        valid={valid}
                        disabled={disabled}
                        clearable={clearable}
                        clearText={clearText}
                        filterable={filterable}
                        filterPlaceholder={filterPlaceholder}
                        placeholder={placeholder}
                        prefix={prefix}
                        empty={empty}
                        loadingText={loadingText}
                        noMatchText={noMatchText}
                        initialFocus={initialFocus}
                        dense={dense}
                    >
                        {children}
                    </SingleSelect>
                </Box>
            </Field>
        )
    }
}

SingleSelectField.defaultProps = {
    selected: '',
    dataTest: 'dhis2-uiwidgets-singleselectfield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {function} [onChange]
 * @prop {string} label
 * @prop {string} [selected]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {Node} [children]
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {boolean} [initialFocus]
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 * @prop {string} [clearText] - Only required if clearable is true
 * @prop {boolean} [clearable]
 * @prop {Node} [empty]
 * @prop {string} [filterPlaceholder]
 * @prop {boolean} [filterable]
 * @prop {string} [loadingText]
 * @prop {string} [maxHeight]
 * @prop {string} [inputMaxHeight]
 * @prop {string} [inputWidth]
 * @prop {string} [noMatchText] - Only required if filterable is true
 * @prop {string} [placeholder]
 * @prop {string} [prefix]
 * @prop {string} [dataTest]
 */
SingleSelectField.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    clearText: propTypes.requiredIf(props => props.clearable, propTypes.string),
    clearable: propTypes.bool,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    empty: propTypes.node,
    error: sharedPropTypes.statusPropType,
    filterPlaceholder: propTypes.string,
    filterable: propTypes.bool,
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    inputMaxHeight: propTypes.string,
    inputWidth: propTypes.string,
    label: propTypes.string,
    loading: propTypes.bool,
    loadingText: propTypes.string,
    maxHeight: propTypes.string,
    noMatchText: propTypes.requiredIf(
        props => props.filterable,
        propTypes.string
    ),
    placeholder: propTypes.string,
    prefix: propTypes.string,
    required: propTypes.bool,
    selected: propTypes.string,
    tabIndex: propTypes.string,
    valid: sharedPropTypes.statusPropType,
    validationText: propTypes.string,
    warning: sharedPropTypes.statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { SingleSelectField }
