import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAddressBookFilledIcon],svg[tdesign-address-book-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14V2zm10 7.75l-2.5-2.062L12 9.75V4h5zM5 18a2 2 0 0 1 2-2h12v4H7a2 2 0 0 1-2-2"></svg:path>`,
})
export class TdesignAddressBookFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
