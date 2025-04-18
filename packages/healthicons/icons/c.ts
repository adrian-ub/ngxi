import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCIcon],svg[healthicons-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31.071 16.929a10 10 0 1 0 0 14.142A2 2 0 1 1 33.9 33.9a14 14 0 1 1 0-19.8a2 2 0 0 1-2.829 2.829" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
