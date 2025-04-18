import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsUnderlineIcon],svg[gridicons-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v2h16v-2zM18 3v8a6 6 0 1 1-12 0V3h3v8c0 1.654 1.346 3 3 3s3-1.346 3-3V3z"></svg:path>`,
})
export class GridiconsUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
