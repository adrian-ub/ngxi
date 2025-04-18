import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScanmediaplzIcon],svg[arcticons-scanmediaplz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.079 20.702a17.2 17.2 0 0 0-4.782-9.008a17.46 17.46 0 0 0-24.625 0M6.89 27.32a17.423 17.423 0 0 0 29.406 8.976"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.121 10.149l3.458 3.455l4.621 4.617H5.5V5.5zm24.3 24.279l-4.653-4.649H42.5V42.5l-4.621-4.617z"></svg:path>`,
})
export class ArcticonsScanmediaplzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
