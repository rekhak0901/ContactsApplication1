
Tests

### delete contact 
1. When on the landing page of the app
2. And there is a contact already added to the app
3. When I delete the contact using the X icon
4. Then the contact should dissapear

### edit contact modal 
1. When on the landing page of the app
2. And there is a contact already added to the app
3. When I edit the contact using the pencil icon
4. Then the edit contact modal should appear
5. And all the fields should be pre populated with the existing data of the contact

### edit contact update button 
1. When on the edit contact modal
2. And I update my contacts information
3. And I click update
4. Then it should only update the correct contact

### edit contact cancel button
1. When on the edit contact modal
2. And I update my contacts information
3. And I click cancel
4. Then it should not update the contact. It should display the the contact with the old existing information.

### edit contact modal error messages
1. When on edit contact modal
2. And I update my contacts information with either no value for name or wrong email pattern
3. error message against the respective fields should be displayed
4. Update button should be disabled.

### edit contact phone
1. When on edit contact modal
2. Pnone number field should allow only numbers to be entered

### add contact modal
1. When on landing page of the app
2. When I click on + icon
3. Add contact modal should appear with all the input fields

### add contact modal error messages
1. When on add contact modal
2. Error message against name field should appear
3. And add button should be disabled

### add contact modal add button
1. When on add contact modal
2. When I add name
3. The error message should disappear
4. Add button should be enabled

### add contact email error message
1. When on add contact modal
2. When I add wrong email pattern
3. Error message should appear
4. Add button should be disabled

### add contact 
1. When on add contact modal
2. When I add details without any error messages displayed
3. Click on add
4. Contact should be added to the contact list

### add contact cancel button
1. When on add contact modal
2. When I add all the details and click on cancel
3. Contact should not be added to the contact list

### add contact phone
1. When on add contact modal
2. Pnone number field should allow only numbers to be entered

### same contacts in DB
1. When checked in the DB using "db.contacts.find().pretty()"
2. same contacts with same details should be in the result as on the contact Application.


