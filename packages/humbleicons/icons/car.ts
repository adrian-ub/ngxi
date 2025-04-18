import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCarIcon],svg[humbleicons-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 11h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-1.5M17 11h-6.5m6.5 0l-2.417-4.029A2 2 0 0 0 12.868 6H10.5m0 0v5m0-5H7.64a2 2 0 0 0-1.962 1.608L5 11m5.5 0H5m.5 5H4a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2v0m.5 5a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m0 0h5m0 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0"></svg:path>`,
})
export class HumbleiconsCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
