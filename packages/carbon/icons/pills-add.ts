import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPillsAddIcon],svg[carbon-pills-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14a7.94 7.94 0 0 0-4 1.083V9A7 7 0 0 0 4 9v14a6.986 6.986 0 0 0 12.276 4.577A7.997 7.997 0 1 0 22 14M11 4a5.006 5.006 0 0 1 5 5v6H6V9a5.006 5.006 0 0 1 5-5m0 24a5.006 5.006 0 0 1-5-5v-6h9.765a7.96 7.96 0 0 0-.724 8.932A5.01 5.01 0 0 1 11 28m11 0a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6"></svg:path><svg:path fill="currentColor" d="M25 21h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></svg:path>`,
})
export class CarbonPillsAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
