import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFaceSurpriseIcon],svg[fa6-solid-face-surprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-79.6-336a32 32 0 1 1 0 64a32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0a32 32 0 1 1-64 0M256 288a64 64 0 1 1 0 128a64 64 0 1 1 0-128"></svg:path>`,
})
export class Fa6SolidFaceSurpriseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
