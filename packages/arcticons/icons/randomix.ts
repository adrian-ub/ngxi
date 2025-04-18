import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRandomixIcon],svg[arcticons-randomix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.89V16.11M16.11 24h15.78M24 24c-4.84 4.84-8.48 6.88-8.48 11.72a8.53 8.53 0 1 0 17.05 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.22 43.89a3.88 3.88 0 1 0-6.45 0M24 24c4.84-4.84 8.48-6.88 8.48-11.72a8.53 8.53 0 1 0-17 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.78 4.11a3.88 3.88 0 1 0 6.45 0M24 24c-4.84-4.84-6.88-8.48-11.72-8.48a8.53 8.53 0 1 0 0 17.05"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.11 27.22a3.88 3.88 0 1 0 0-6.45M24 24c4.84 4.84 6.88 8.48 11.72 8.48a8.53 8.53 0 1 0 0-17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.89 20.78a3.88 3.88 0 1 0 0 6.45"></svg:path>`,
})
export class ArcticonsRandomixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
