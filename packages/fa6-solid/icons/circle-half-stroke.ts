import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidCircleHalfStrokeIcon],svg[fa6-solid-circle-half-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 256c0-106-86-192-192-192v384c106 0 192-86 192-192M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0"></svg:path>`,
})
export class Fa6SolidCircleHalfStrokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
