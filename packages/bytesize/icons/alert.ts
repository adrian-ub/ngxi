import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeAlertIcon],svg[bytesize-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 3l14 26H2Zm0 8v8m0 4v2"></svg:path>`,
})
export class BytesizeAlertIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
