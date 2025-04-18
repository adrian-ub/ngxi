import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonObjectStorageIcon],svg[carbon-object-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h10v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 8h-8v6h-6v8h8v-6h6zm-8 12h-4v-4h4zm6-6h-4v-4h4zm-10-4h-8V2h8zm-6-2h4V4h-4z"></svg:path>`,
})
export class CarbonObjectStorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
