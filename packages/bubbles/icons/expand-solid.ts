import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesExpandSolidIcon],svg[bubbles-expand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.286 14.286H4V20h5.714v-2.286H6.286zM4 9.714h2.286V6.286h3.428V4H4zm13.714 8h-3.428V20H20v-5.714h-2.286zM14.286 4v2.286h3.428v3.428H20V4z"></svg:path>`,
})
export class BubblesExpandSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
