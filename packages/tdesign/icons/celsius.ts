import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCelsiusIcon],svg[tdesign-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M4 6.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m7-.5a2 2 0 0 1 2-2h7v2h-7v12h7v2h-7a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TdesignCelsiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
