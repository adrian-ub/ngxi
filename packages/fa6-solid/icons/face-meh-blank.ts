import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFaceMehBlankIcon],svg[fa6-solid-face-meh-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m208.4-48a32 32 0 1 0-64 0a32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidFaceMehBlankIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
