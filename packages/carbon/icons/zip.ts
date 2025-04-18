import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonZipIcon],svg[carbon-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 9h-6v14h2v-5h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2m0 7h-4v-5h4zM12 9v2h3v10h-3v2h8v-2h-3V11h3V9zm-2 0H2v2h6L2 21v2h8v-2H4l6-10z"></svg:path>`,
})
export class CarbonZipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
