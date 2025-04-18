import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBuildingIcon],svg[maki-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2v11h5v-3h3v3h1V2zm4 10H4v-2h3zm0-3H4V7h3zm0-3H4V4h3zm4 3H8V7h3zm0-3H8V4h3z"></svg:path>`,
})
export class MakiBuildingIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
