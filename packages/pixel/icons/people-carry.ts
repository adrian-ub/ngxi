import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPeopleCarryIcon],svg[pixel-people-carry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h1v2H3zm1-1h2v1H4zm0 3h2v1H4zm2-2h1v2H6zM3 17h1v1H3v2H1v-3h1v-1h1z"></svg:path><svg:path fill="currentColor" d="M20 15h1v-1h1v-3h-1V8h-1V7h-2v1h-1v2h-1v1h-1V7H9v4H8v-1H7V8H6V7H4v1H3v3H2v3h1v1h1v1h1v4h1v1h1v-1h1v-3H7v-3H6v-2h1v1h1v1h8v-1h1v-1h1v2h-1v3h-1v3h1v1h1v-1h1v-4h1zm-6-2h-4V8h4z"></svg:path><svg:path fill="currentColor" d="M23 17v3h-2v-2h-1v-1h1v-1h1v1zM17 3h1v2h-1zm1-1h2v1h-2zm0 3h2v1h-2zm2-2h1v2h-1z"></svg:path>`,
})
export class PixelPeopleCarryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
