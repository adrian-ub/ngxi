import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOnenoteIcon],svg[mdi-onenote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M1.96 4.8L14 3.08V5h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8h-6v2L1.96 19.21V4.8M11 16.75v-8.5L9 8.5v4.25l-2-4L5 9v7l1.5.25v-5.5L9 16.5l2 .25M14 14h4v-1h-4v1m0-3h4v-1h-4v1m0-3h4V7h-4v1m0 8v1h4v-1h-4z" fill="currentColor"></svg:path>`,
})
export class MdiOnenoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
