import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoPublishIcon],svg[entypo-publish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.967 8.193L5 13h3v6h4v-6h3zM18 1H2C.9 1 0 1.9 0 3v12c0 1.1.9 2 2 2h4v-2H2V6h16v9h-4v2h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M2.5 4.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m2 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5M18 4H6V3h12.019z"></svg:path>`,
})
export class EntypoPublishIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
