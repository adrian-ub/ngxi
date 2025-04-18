import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPeopleCarrySolidIcon],svg[pixel-people-carry-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h1v1H3v2H1v-3h1v-1h1zM4 5H3V3h1V2h2v1h1v2H6v1H4zm19 12v3h-2v-2h-1v-1h1v-1h1v1z"></svg:path><svg:path fill="currentColor" d="M20 16h-1v4h-1v1h-1v-1h-1v-3h1v-3h1v-2h-1v1h-1v1H8v-1H7v-1H6v2h1v3h1v3H7v1H6v-1H5v-4H4v-1H3v-1H2v-3h1V8h1V7h2v1h1v2h1v1h1V7h6v4h1v-1h1V8h1V7h2v1h1v3h1v3h-1v1h-1zM18 5h-1V3h1V2h2v1h1v2h-1v1h-2z"></svg:path>`,
})
export class PixelPeopleCarrySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
