import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMultipleOutlineIcon],svg[mdi-bookmark-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h10a2 2 0 0 1 2 2v16l-2-.87V3H7a2 2 0 0 1 2-2m6 19V7H5v13l5-2.18zm0-15a2 2 0 0 1 2 2v16l-7-3l-7 3V7a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiBookmarkMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
