import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siViewCompactFillIcon],svg[si-view-compact-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14H8v-3h3zm5 0h-3v-3h3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.4 5h15.2A2.4 2.4 0 0 1 22 7.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V7.4A2.4 2.4 0 0 1 4.4 5M8 9V6H6v3H3v2h3v3H3v2h3v3h2v-3h3v3h2v-3h3v3h2v-3h3v-2h-3v-3h3V9h-3V6h-2v3h-3V6h-2v3z" clip-rule="evenodd"></svg:path>`,
})
export class SiViewCompactFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
