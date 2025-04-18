import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiTidalLogoIcon],svg[cbi-tidal-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.14 16.525l5.333 5.333l-5.333 5.334l-5.334-5.334zM5.473 5.858l5.333 5.333l-5.333 5.334L.139 11.19Zm21.333 0l5.333 5.333l-5.333 5.334l-5.334-5.334l-5.332 5.334l-5.334-5.334l5.334-5.333l5.332 5.333z"></svg:path>`,
})
export class CbiTidalLogoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
