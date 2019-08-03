Globant - Code Realm - Angular Assignment
The current application
The existing app is a simple list app for which you can perform the following operations -

View the heroes list
Clicking on an hero will take you to the hero information screen.
Add a new hero to the list.
Points to implement
Make the app responsive

The app isn't responsive and doesn't display correctly on mobile devices. Fix/ add styles for it as per the designs and wireframe available under the "src/assets/wireframes" folder.
On the information screen

Display the date in readable format - 4th July, 2019
Remove the setTimeout present in hero-information component, and ensure the app still behaves the same way.
On the hero-form screen

Add validations so that the "Contact No." field should exactly be the 10 digits and shouldn't accept alphanumeric characters.
Show the error messages (which field is empty, contact accepts 10 digit number only etc).
Disable the "Create Hero" button if the form is invalid.
Unit Test Cases
app.component.spec.ts and hero-list.component.spec.ts

Test cases are mentioned by @todo. Please refer the @todo and add the test cases.
hero-information.spec.ts and hero-form.component.spec.ts
Please add test cases.

Please note
Please do not change core angular dependencies and versions.
The ability to execute unit tests is already baked in so you don't have to make any configuration changes to enable it.
You cannot use any third party lib in this application
