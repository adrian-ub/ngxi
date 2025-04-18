import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTempHotFillIcon],svg[ri-temp-hot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0m3 1.871A4.002 4.002 0 0 0 12 20a4 4 0 0 0 1-7.874V5h-2z"></svg:path>`,
})
export class RiTempHotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
