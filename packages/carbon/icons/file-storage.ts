import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFileStorageIcon],svg[carbon-file-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m22.707 7.293l-5-5A1 1 0 0 0 17 2h-6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a1 1 0 0 0-.293-.707M20.586 8H17V4.414ZM11 20V4h4v4a2 2 0 0 0 2 2h4v10Z"></svg:path>`,
})
export class CarbonFileStorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
