import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPhonebookOutlineIcon],svg[bubbles-phonebook-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 23.25H5.25A2.25 2.25 0 0 1 3 21M6 .75a3 3 0 0 0-3 3V21a2.25 2.25 0 0 1 2.25-2.25h15A.75.75 0 0 0 21 18V1.5a.75.75 0 0 0-.75-.75zm13.5 22.5v-4.5"></svg:path><svg:path d="m11.748 13.68l2.411-2.38a1.5 1.5 0 0 1 2.121 0l.531.53a1.5 1.5 0 0 1 0 2.122l-.46.46a1.5 1.5 0 0 1-1.425.4l-.872-.218a9.48 9.48 0 0 1-6.9-6.9l-.214-.87A1.5 1.5 0 0 1 7.335 5.4l.46-.46a1.5 1.5 0 0 1 2.121 0l.531.53a1.5 1.5 0 0 1 0 2.12l-2.386 2.4"></svg:path></svg:g>`,
})
export class BubblesPhonebookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
