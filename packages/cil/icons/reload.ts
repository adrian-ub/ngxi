import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilReloadIcon],svg[cil-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M265.614 206.387H456V16h-32v133.887l-26.137-26.137c-79.539-79.539-208.96-79.54-288.5 0s-79.539 208.96 0 288.5a204.23 204.23 0 0 0 288.5 0l-22.627-22.627c-67.063 67.063-176.182 67.063-243.244 0s-67.063-176.183 0-243.246s176.182-67.063 243.245 0l28.01 28.01H265.614Z"></svg:path>`,
})
export class CilReloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
