import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWebsheetIcon],svg[carbon-websheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M24 30a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonWebsheetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
