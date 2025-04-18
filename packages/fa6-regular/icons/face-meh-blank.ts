import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularFaceMehBlankIcon],svg[fa6-regular-face-meh-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48a208 208 0 1 0 0 416a208 208 0 1 0 0-416m256 208a256 256 0 1 1-512 0a256 256 0 1 1 512 0m-367.6-48a32 32 0 1 1 64 0a32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6RegularFaceMehBlankIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
