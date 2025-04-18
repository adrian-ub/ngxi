import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggOculusIcon],svg[gg-oculus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 10H8a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4M8 6a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12z" clip-rule="evenodd"></svg:path>`,
})
export class GgOculusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
