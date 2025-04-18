import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaCaretLeftOutlineIcon],svg[cuida-caret-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.207 4.293a1 1 0 0 1 0 1.414L9.914 12l6.293 6.293a1 1 0 0 1-1.414 1.414L8.5 13.414a2 2 0 0 1 0-2.828l6.293-6.293a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class CuidaCaretLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
