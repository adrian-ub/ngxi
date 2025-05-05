import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSdcardIcon],svg[picon-sdcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v2h1V1M2 2v2h1V2m1-1v2h1V1M1 8V2l2-2h5v8"></svg:path>`,
})
export class PiconSdcardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
