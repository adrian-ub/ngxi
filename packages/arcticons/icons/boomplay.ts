import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBoomplayIcon],svg[arcticons-boomplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="25.8" cy="15.3" r="3.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.8" cy="31.8" r="4.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26 12l-10.7-1.2m9.8 16.9l-13.3-1.5m17.6-3.6c5.5 0 10 4.5 10 10s-4.5 10-10 10H12.2c-2.1 0-3.6-1.9-3.2-4l7-32c.1-.6.7-1 1.3-1h11.8c4.7 0 8.4 3.8 8.4 8.5c0 4.5-3.5 8.3-8.1 8.5"></svg:path>`,
})
export class ArcticonsBoomplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
