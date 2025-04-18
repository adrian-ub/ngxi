import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteKeyboardOutlineIcon],svg[flowbite-keyboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"><svg:path d="M8 15h7.01v.01H15z"></svg:path><svg:path d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"></svg:path><svg:path d="M6 9h.01v.01H6zm0 3h.01v.01H6zm0 3h.01v.01H6zm3-6h.01v.01H9zm0 3h.01v.01H9zm3-3h.01v.01H12zm0 3h.01v.01H12zm3 0h.01v.01H15zm3 0h.01v.01H18zm0 3h.01v.01H18zm-3-6h.01v.01H15zm3 0h.01v.01H18z"></svg:path></svg:g>`,
})
export class FlowbiteKeyboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
