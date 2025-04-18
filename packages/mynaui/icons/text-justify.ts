import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTextJustifyIcon],svg[mynaui-text-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 6h15m-15 4h15m-15 4h15m-15 4h15"></svg:path>`,
})
export class MynauiTextJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
