import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaCaretUpOutlineIcon],svg[cuida-caret-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.707 16.207a1 1 0 0 1-1.414 0L12 9.914l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 8.5a2 2 0 0 1 2.828 0l6.293 6.293a1 1 0 0 1 0 1.414" clip-rule="evenodd"></svg:path>`,
})
export class CuidaCaretUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
