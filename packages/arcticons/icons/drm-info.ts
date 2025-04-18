import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDrmInfoIcon],svg[arcticons-drm-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.17 19.26h27.66a1.9 1.9 0 0 1 1.898 1.9V41.6a1.9 1.9 0 0 1-1.899 1.9H10.171a1.9 1.9 0 0 1-1.9-1.9V21.16a1.9 1.9 0 0 1 1.9-1.9m3.419 0V14.9a10.401 10.401 0 0 1 20.803 0v4.36"></svg:path><svg:circle cx="23.991" cy="31.38" r="4.034" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDrmInfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
