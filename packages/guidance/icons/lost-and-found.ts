import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLostAndFoundIcon],svg[guidance-lost-and-found-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 11v-1a2.5 2.5 0 0 1 5 0v.039a2 2 0 0 1-.75 1.562l-1 .798a2 2 0 0 0-.75 1.562V15.5m0 1.5v2M5.5 4.5v17m13 0v-17h-2.027m-8.946 0H.5v.25l.055.31a45.7 45.7 0 0 1 0 15.88l-.055.31v.25h23v-.25l-.055-.31a45.7 45.7 0 0 1 0-15.88l.055-.31V4.5h-7.027m-8.946 0a4.5 4.5 0 0 1 8.946 0m-8.946 0h8.946"></svg:path>`,
})
export class GuidanceLostAndFoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
