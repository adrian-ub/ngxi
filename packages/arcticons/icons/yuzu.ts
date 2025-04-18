import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYuzuIcon],svg[arcticons-yuzu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.65 4.5c-8.563 0-15.505 6.942-15.505 15.506s6.942 15.506 15.506 15.506zm4.7 39c8.563 0 15.505-6.942 15.505-15.506S34.913 12.488 26.35 12.488z"></svg:path>`,
})
export class ArcticonsYuzuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
