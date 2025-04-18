import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsVideosIcon],svg[bx-bxs-videos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z" fill="currentColor"></svg:path><svg:path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-9 12V6l7 4z" fill="currentColor"></svg:path>`,
})
export class BxBxsVideosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
