import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneContactPhonebookPhonebookPhoneNumberBooksBookIcon],svg[streamline-phone-contact-phonebook-phonebook-phone-number-books-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 13.5H2a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1ZM4 .5v13M7.5 4h2"></svg:path>`,
})
export class StreamlinePhoneContactPhonebookPhonebookPhoneNumberBooksBookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
