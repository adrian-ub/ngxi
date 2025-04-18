import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsIceCreamIcon],svg[lets-icons-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v9H8zm4 9v5m0-13v3"></svg:path>`,
})
export class LetsIconsIceCreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
