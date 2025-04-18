import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFunctionArgumentRtlIcon],svg[ooui-function-argument-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a8 8 0 0 1 14.93-4h2.238A10 10 0 0 0 10 0C4.477 0 0 4.477 0 10s4.477 10 10 10c4.1 0 7.625-2.468 9.168-6H16.93A8 8 0 0 1 2 10m15.938-1H12V5l-6 5l6 5v-4h8V9z"></svg:path>`,
})
export class OouiFunctionArgumentRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
