import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBarChartIcon],svg[fa-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 768v512H384V768zm384-512v1024H768V256zm1024 1152v128H0V0h128v1408zm-640-896v768h-256V512zm384-384v1152h-256V128z"></svg:path>`,
})
export class FaBarChartIcon {
  readonly viewBox = input("0 0 2048 1536")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
