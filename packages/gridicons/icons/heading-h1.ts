import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsHeadingH1Icon],svg[gridicons-heading-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2v10h-2v-4H7v4H5V7h2v4h4zm6.57 0A4.74 4.74 0 0 1 15 9v1h2v7h2V7z"></svg:path>`,
})
export class GridiconsHeadingH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
