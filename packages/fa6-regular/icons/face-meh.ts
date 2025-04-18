import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularFaceMehIcon],svg[fa6-regular-face-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256a208 208 0 1 1-416 0a208 208 0 1 1 416 0M256 0a256 256 0 1 0 0 512a256 256 0 1 0 0-512m-79.6 240a32 32 0 1 0 0-64a32 32 0 1 0 0 64m192-32a32 32 0 1 0-64 0a32 32 0 1 0 64 0M184 328c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"></svg:path>`,
})
export class Fa6RegularFaceMehIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
