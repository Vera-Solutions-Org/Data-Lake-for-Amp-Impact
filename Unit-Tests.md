# Unit Tests

For information about running tests for create-react-app applications
<https://create-react-app.dev/docs/running-tests/>

## Mocks

<!-- Since Jest has not fully supported ESM yet, we used mocks for some third party libraries.
These mocks can be found under `src/__mocks__` -->

## Models and Stores

### Field Model

- initialized properly
- address is a compound type
- location is a compound type
- any other type different than address and location is not a compound type
- can not exclude id type
- can not exclude certain names
- can exclude other field types
- can not toggle excluded prop if canExclude is false
- can not toggle excluded prop for compound type
- can toggle excluded prop for other types

### SFObject Model

- initialized properly
- set object using setObject action
- set fields using setFields action
- set fields using setFields action except compound fields
- set field using setField action
- set fields loaded using setFieldsLoaded action
- set selected using setSelected action
- set stale using markStale action
- get selectable fields using selectableFields view
- get listable fields using listableFields view
- get immutable fields using immutableFields view
- get selected fields using selectedFields view
- get user selected fields using userSelectedFields view
- get excluded fields using excludedFields view
- get all excluded fields using allExcludedFields view
- get number of fields using fieldsCount view
- get number of selected fields using selectedFieldsCount view
- get number of excluded fields using excludedFieldsCount view
- check the object is not default
- check the Account object is default

### Credentials Model

- initialized properly
- reset credentials using reset action
- root user
- non-root user
- non-empty credentials
- empty access key
- empty secret key

## Components

### ClickableImage

<!-- - Unit test to check rendering properly -->

### ClipboardField

<!-- - Unit test to check rendering non-password text properly
- Unit test to check rendering password text properly
- Unit test to check click event for password text -->

### CloudwatchDashboardPanel

<!-- - Unit test to check rendering properly -->

### CredentialsError

<!-- - Unit test to check rendering properly without an exception
- Unit test to check rendering properly with an invalid key exception
- Unit test to check rendering properly with a non-admin key exception
- Unit test to check rendering properly with an account mismatch exception
- Unit test to check rendering properly with a default exception
- Unit test to check rendering properly with an unknown exception -->

### CredentialsForm

### CurvedBox

<!-- - Unit test to check rendering properly -->

### DataImportStatusPanel

<!-- - Unit test to check CountBadge rendering properly -->

### DataModelDescription

### DataModelTable

### DataModelTablePreview

### DetectedInstallationSelections

### DownloadableAccessKey

### FieldsTable

### ImportFrequencyPanel

### Markdown

### ObjectsTable

### OutlineButton

### PaginationButtons

### RegionForm

### RetryErrorPanel

### StepsBanner

### StepsIndicator

### SubscribeSNSPanel

### TableauAccessPanel

### TimeAgo

### TimeInput

### UsersPanel

### UsersTable

## Pages

### Home Page

### Step1 Page

### Step2 Page

### Step3 Page

### Step4 Page

### Step5 Page

### Step6 Page

### BackHome Page

### App