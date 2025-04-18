import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteKeyboardSolidIcon],svg[flowbite-keyboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm5.01 1H5v2.01h2.01zm3 0H8v2.01h2.01zm3 0H11v2.01h2.01zm3 0H14v2.01h2.01zm3 0H17v2.01h2.01zm-12 3H5v2.01h2.01zm3 0H8v2.01h2.01zm3 0H11v2.01h2.01zm3 0H14v2.01h2.01zm3 0H17v2.01h2.01zm-12 3H5v2.01h2.01zM8 14l-.001 2l8.011.01V14zm11.01 0H17v2.01h2.01z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteKeyboardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
