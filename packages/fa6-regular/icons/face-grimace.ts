import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularFaceGrimaceIcon],svg[fa6-regular-face-grimace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48a208 208 0 1 0 0 416a208 208 0 1 0 0-416m256 208a256 256 0 1 1-512 0a256 256 0 1 1 512 0m-344 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v-48zm40 48h32v-48h-32zm96 0v-48h-32v48zm32 0h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8zm-168-80h176c30.9 0 56 25.1 56 56s-25.1 56-56 56H168c-30.9 0-56-25.1-56-56s25.1-56 56-56m-23.6-80a32 32 0 1 1 64 0a32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6RegularFaceGrimaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
