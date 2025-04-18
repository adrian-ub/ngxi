import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFastForwardOutlineIcon],svg[mdi-fast-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 9.9l3 2.1l-3 2.1zm-9 0L9 12l-3 2.1zM13 6v12l8.5-6zM4 6v12l8.5-6z"></svg:path>`,
})
export class MdiFastForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
