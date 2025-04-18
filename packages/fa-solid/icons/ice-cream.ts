import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidIceCreamIcon],svg[fa-solid-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 160h-.94a144 144 0 1 0-286.12 0H80a48 48 0 0 0 0 96h288a48 48 0 0 0 0-96M195.38 493.69a31.52 31.52 0 0 0 57.24 0L352 288H96z"></svg:path>`,
})
export class FaSolidIceCreamIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
