import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSolidityIcon],svg[catppuccin-solidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="m3 11.5l2.5 4l2.5-4l2.5 4l2.5-4l-2.5-4l-2.5 4m2.5 4h-5m7.5-4H3m10-7l-2.5-4l-2.5 4l-2.5-4l-2.5 4l2.5 4l2.5-4M5.5.5h5M3 4.5h10"></svg:path>`,
})
export class CatppuccinSolidityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
