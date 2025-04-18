import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoRecordIcon],svg[fontisto-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.372 0 12c0 6.627 5.372 12 12 12c6.627 0 12-5.372 12-12"></svg:path>`,
})
export class FontistoRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
