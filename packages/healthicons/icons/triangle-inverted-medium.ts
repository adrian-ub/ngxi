import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedMediumIcon],svg[healthicons-triangle-inverted-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.106 37.516c.169.297.515.484.894.484s.725-.187.894-.484l15-26.25a.78.78 0 0 0-.043-.851A1.04 1.04 0 0 0 39 10H9c-.347 0-.668.157-.85.415a.78.78 0 0 0-.044.851z"></svg:path>`,
})
export class HealthiconsTriangleInvertedMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
