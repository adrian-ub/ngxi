import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityMediaChangerLineIcon],svg[clarity-media-changer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 30V6h24v24Z"></svg:path><svg:path fill="currentColor" d="M20 18h2v2h-2zm4 0h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zm3.22-12H20v4a.8.8 0 1 0 1.59 0v-2.4h5.63a.8.8 0 1 0 0-1.6M8.81 10h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81z"></svg:path>`,
})
export class ClarityMediaChangerLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
