import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTransferVanIcon],svg[streamline-transfer-van-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.159 10.89V4.104a1 1 0 0 0-1-1H1.702a1 1 0 0 0-1 1v6.626a1 1 0 0 0 1 1h.75m10.846-3.893H9.16m2.792 3.706h.345a1 1 0 0 0 1-1v-3L11.904 4.69a1 1 0 0 0-.898-.56H9.339"></svg:path><svg:path d="M2.502 11.76a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0m6.337 0a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0m-.262-.03H5.64"></svg:path></svg:g>`,
})
export class StreamlineTransferVanIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
