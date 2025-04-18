import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarBoxMultipleOutlineIcon],svg[mdi-star-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v14h14v2H3c-.6 0-1-.4-1-1V6zm8.1 4.6l-1.9-1.8l2.6-.4L14 6l1.2 2.4l2.6.4l-1.9 1.9l.4 2.6L14 12l-2.4 1.2zM8 2h12a2 2 0 0 1 2 2v12c0 1.11-.89 2-2 2H8a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 2v12h12V4z"></svg:path>`,
})
export class MdiStarBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
