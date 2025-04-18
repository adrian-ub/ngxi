import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiHotelIcon],svg[twemoji-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C1694F" d="M21 15a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-3a4 4 0 0 1 4-4h13a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#C1694F" d="M36 6a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFCC4D" d="M0 12v22a2 2 0 0 0 2 2h31V12z"></svg:path><svg:path fill="#55ACEE" d="M2 32h12v4H2zm0-6h16v4H2z"></svg:path><svg:path fill="#FFE8B6" d="M16 5v31h18a2 2 0 0 0 2-2V5z"></svg:path><svg:path fill="#55ACEE" d="M18 20h16v4H18zm0-6h16v4H18zm0-6h16v4H18zm0 18h16v4H18z"></svg:path><svg:path fill="#FFE8B6" d="M22 7h2v24h-2zm6 0h2v24h-2z"></svg:path><svg:path fill="#3B88C3" d="M22 32h8v4h-8zM10 14v4H6v-4H4v10h2v-4h4v4h2V14z"></svg:path><svg:path fill="#FFCC4D" d="M7 25h2v6H7zm7 0h2v6h-2z"></svg:path>`,
})
export class TwemojiHotelIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
