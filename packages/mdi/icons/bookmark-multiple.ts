import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMultipleIcon],svg[mdi-bookmark-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5a2 2 0 0 1 2 2v16l-7-3l-7 3V7a2 2 0 0 1 2-2zM9 1h10a2 2 0 0 1 2 2v16l-2-.87V3H7a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiBookmarkMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
