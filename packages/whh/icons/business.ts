import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBusinessIcon],svg[whh-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M377 61L253 204l121 570q6 16 8 22.5t.5 14.5t-8.5 15l-156 187q-10 11-25.5 11t-26.5-11L11 826q-10-13-9.5-21.5T11 774l121-571L9 61Q-4 49 2.5 24.5T31 0h325q22 0 27.5 24.5T377 61"></svg:path>`,
})
export class WhhBusinessIcon {
  readonly viewBox = input("0 0 386 1024")
  readonly width = input("0.38em")
  readonly height = input("1em")
}
