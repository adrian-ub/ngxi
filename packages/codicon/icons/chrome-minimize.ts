import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconChromeMinimizeIcon],svg[codicon-chrome-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8v1H3V8z"></svg:path>`,
})
export class CodiconChromeMinimizeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
