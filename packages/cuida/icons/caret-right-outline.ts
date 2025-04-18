import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaCaretRightOutlineIcon],svg[cuida-caret-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.793 19.707a1 1 0 0 1 0-1.414L14.086 12L7.793 5.707a1 1 0 0 1 1.414-1.414l6.293 6.293a2 2 0 0 1 0 2.828l-6.293 6.293a1 1 0 0 1-1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class CuidaCaretRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
