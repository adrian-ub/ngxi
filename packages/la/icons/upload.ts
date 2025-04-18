import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laUploadIcon],svg[la-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3.594l-.719.687l-7 7L9.72 12.72L15 7.438V24h2V7.437l5.281 5.282l1.438-1.438l-7-7zM7 26v2h18v-2z"></svg:path>`,
})
export class LaUploadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
