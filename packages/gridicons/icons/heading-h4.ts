import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsHeadingH4Icon],svg[gridicons-heading-h4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17H9v-4H5v4H3V7h2v4h4V7h2zm10-2h-1v2h-2v-2h-5v-2l4.05-6H20v6h1zm-3-2V9l-2.79 4z"></svg:path>`,
})
export class GridiconsHeadingH4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
