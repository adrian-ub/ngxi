import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContactsBook2FillIcon],svg[ri-contacts-book-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2v-2H6a1 1 0 1 0 0 2zm-7-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3 4h6a3 3 0 1 0-6 0"></svg:path>`,
})
export class RiContactsBook2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
