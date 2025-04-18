import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTreecardIcon],svg[arcticons-treecard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="25.54" height="32.36" x="11.23" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.05" ry="4.05"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5v39M11.23 10.19C11.23 20.94 24 17.62 24 27.7m12.77-9.07C36.77 29.38 24 26.06 24 36.14M15.94 8.89c-.33 0-.65.04-.96.11c-.07.31-.11.63-.11.96c0 2.44 1.98 4.42 4.42 4.42c.33 0 .65-.04.96-.11c.07-.31.11-.63.11-.96c0-2.44-1.98-4.42-4.42-4.42m16.12 4.57c.33 0 .65.04.96.11c.07.31.11.63.11.96c0 2.44-1.98 4.42-4.42 4.42c-.33 0-.65-.04-.96-.11c-.07-.31-.11-.63-.11-.96c0-2.44 1.98-4.42 4.42-4.42M15.94 25.29c-.33 0-.65.04-.96.11c-.07.31-.11.63-.11.96c0 2.44 1.98 4.42 4.42 4.42c.33 0 .65-.04.96-.11c.07-.31.11-.63.11-.96c0-2.44-1.98-4.42-4.42-4.42"></svg:path>`,
})
export class ArcticonsTreecardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
