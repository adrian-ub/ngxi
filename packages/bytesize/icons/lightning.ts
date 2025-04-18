import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeLightningIcon],svg[bytesize-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 13l8-11L8 13l6 6l-8 11l18-11Z"></svg:path>`,
})
export class BytesizeLightningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
