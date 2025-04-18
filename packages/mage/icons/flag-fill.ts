import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFlagFillIcon],svg[mage-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.372 3.86v10.88a.75.75 0 0 1-.43.68a11.85 11.85 0 0 1-4.64 1.16a5.9 5.9 0 0 1-3.71-1.21a4.45 4.45 0 0 0-2.85-1a7.16 7.16 0 0 0-3.61.73v6.13a.75.75 0 1 1-1.5 0V3.86a1 1 0 0 1 0-.15a.76.76 0 0 1 .31-.47c.38-.32 1.73-1.22 4.78-1.22a5.87 5.87 0 0 1 3.68 1.22a4.46 4.46 0 0 0 2.85 1a10.3 10.3 0 0 0 4-1a.74.74 0 0 1 .72.05a.73.73 0 0 1 .4.57"></svg:path>`,
})
export class MageFlagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
