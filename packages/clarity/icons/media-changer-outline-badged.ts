import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityMediaChangerOutlineBadgedIcon],svg[clarity-media-changer-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18h2v2h-2zm4 0h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zM8.81 10h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zM20 14a.8.8 0 1 0 1.59 0v-2.4H25a7.7 7.7 0 0 1-1.34-1.6H20Z"></svg:path><svg:path fill="currentColor" d="M30 13.5V30H6V6h16.5a7.4 7.4 0 0 1 .28-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V13.22a7.4 7.4 0 0 1-2 .28"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor"></svg:circle>`,
})
export class ClarityMediaChangerOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
