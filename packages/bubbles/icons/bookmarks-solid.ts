import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesBookmarksSolidIcon],svg[bubbles-bookmarks-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.333 4.333A.667.667 0 0 0 14 3.667v-1A2.667 2.667 0 0 0 11.333 0H4.667A2.667 2.667 0 0 0 2 2.667v12.322a.94.94 0 0 0 .55.948a.94.94 0 0 0 1.06-.281l2.154-2.154a.334.334 0 0 1 .472 0l2.155 2.154a1.03 1.03 0 0 0 .738.344q.166 0 .321-.063a.94.94 0 0 0 .55-.948V2.74a1.386 1.386 0 0 1 1.108-1.39a1.333 1.333 0 0 1 1.559 1.317v1a.667.667 0 0 0 .666.666"></svg:path>`,
})
export class BubblesBookmarksSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
