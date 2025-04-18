import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFaceLaughIcon],svg[fa6-solid-face-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512M96.8 314.1c-3.8-13.7 7.4-26.1 21.6-26.1h275.2c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432S115.8 382 96.8 314.1M144.4 192a32 32 0 1 1 64 0a32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidFaceLaughIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
