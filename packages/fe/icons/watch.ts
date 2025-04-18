import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feWatchIcon],svg[fe-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 6.803A6 6 0 0 1 18 12c0 2.22-1.207 4.16-3 5.197V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.803A6 6 0 0 1 6 12c0-2.22 1.207-4.16 3-5.197V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m2-5a1 1 0 0 1 0 2h-1c-1.1 0-2-.9-2-2v-1a1 1 0 0 1 2 0v1z"></svg:path>`,
})
export class FeWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
