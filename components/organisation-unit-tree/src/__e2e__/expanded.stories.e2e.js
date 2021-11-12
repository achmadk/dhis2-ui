import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    createDecoratorCustomDataProvider,
    createDecoratorStatefulMultiSelection,
} from './common.js'

export default {
    title: 'OrganisationUnitTree/expanded',
    decorators: [
        createDecoratorStatefulMultiSelection(),
        createDecoratorCustomDataProvider(),
    ],
}

export const NoInitiallyExpandedPaths = (_, { onChange, selected }) => (
    <OrganisationUnitTree
        roots="A0000000000"
        selected={selected}
        onChange={onChange}
    />
)

export const InitiallyExpandedPaths = (_, { onChange, selected }) => (
    <OrganisationUnitTree
        roots="A0000000000"
        selected={selected}
        onChange={onChange}
                        initiallyExpanded={['/A0000000000']}
    />
)

export const WithRootMainAndRootSubOrgUnit = (_, { onChange, selected }) => (
    <OrganisationUnitTree
        roots={['A0000000000', 'A0000000001']}
        selected={selected}
        onChange={onChange}
    />
)
