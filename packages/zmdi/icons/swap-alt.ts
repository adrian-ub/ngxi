import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSwapAltIcon],svg[zmdi-swap-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m341 21l86 86h-64v149q0 35-25 60t-60.5 25t-60.5-25t-25-60V107q0-18-12.5-30.5t-30-12.5t-30 12.5T107 107v149h64l-86 85l-85-85h64V107q0-36 25-61t60.5-25T210 46t25 61v149q0 18 12.5 30.5t30 12.5t30-12.5T320 256V107h-64z"></svg:path>`,
})
export class ZmdiSwapAltIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
