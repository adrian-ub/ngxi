import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCageIcon],svg[fe-cage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4.341c2.33.824 4 3.047 4 5.659v9h.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3H6v-9a6 6 0 0 1 4-5.659V4a2 2 0 1 1 4 0zM16 11v3h-3v-3zm0-2h-3V6a4.18 4.18 0 0 1 3 3m-8 2h3v3H8zm0-2a4.18 4.18 0 0 1 3-3v3zm8 7v3h-3v-3zm-8 0h3v3H8z"></svg:path>`,
})
export class FeCageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
