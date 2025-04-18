import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconChromeMaximizeIcon],svg[codicon-chrome-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v10h10V3zm9 9H4V4h8z"></svg:path>`,
})
export class CodiconChromeMaximizeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
