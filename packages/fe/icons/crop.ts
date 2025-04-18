import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCropIcon],svg[fe-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 20v-2H8c-1.1 0-2-.9-2-2V8H4a1 1 0 1 1 0-2h2V4a1 1 0 1 1 2 0v2h9l2-2l1 1l-2 2v9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0m0-4V9l-7 7zM8 8v7l7-7z"></svg:path>`,
})
export class FeCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
