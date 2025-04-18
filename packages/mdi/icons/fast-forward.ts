import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFastForwardIcon],svg[mdi-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v12l8.5-6M4 18l8.5-6L4 6z"></svg:path>`,
})
export class MdiFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
