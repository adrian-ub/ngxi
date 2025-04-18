import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAppIcon],svg[carbon-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6v14h2v-4h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zm-6-8h-6v14h2v-4h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zm-6-8H3v2h5v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2m0 8H4v-2h4z"></svg:path>`,
})
export class CarbonAppIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
