import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPlayIcon],svg[proicons-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M5.5 12V5.624c0-1.974 2.18-3.17 3.844-2.108l10 6.376c1.541.983 1.541 3.233 0 4.216l-10 6.376C7.68 21.545 5.5 20.35 5.5 18.376z"></svg:path>`,
})
export class ProiconsPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
