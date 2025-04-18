import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTemperatureFillIcon],svg[lets-icons-temperature-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 1 1 6 0v5.5c0 .315.152.606.384.819a5 5 0 1 1-6.768 0c.232-.213.384-.504.384-.819zm2 0v7h2V6a1 1 0 1 0-2 0" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsTemperatureFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
