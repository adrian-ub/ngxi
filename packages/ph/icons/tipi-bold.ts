import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTipiBoldIcon],svg[ph-tipi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.11 209.53l-99.86-156l19.86-31a12 12 0 1 0-20.22-13L128 31.24L114.11 9.53a12 12 0 0 0-20.22 12.94l19.86 31l-99.86 156A12 12 0 0 0 24 228h208a12 12 0 0 0 10.11-18.47M96.17 204L128 154.26L159.83 204Zm92.16 0l-50.22-78.47a12 12 0 0 0-20.22 0L67.67 204H45.93L128 75.76L210.07 204Z"></svg:path>`,
})
export class PhTipiBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
