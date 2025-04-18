import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTextAlignJustifyIcon],svg[ci-text-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18H4m16-4H4m16-4H4m16-4H4"></svg:path>`,
})
export class CiTextAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
