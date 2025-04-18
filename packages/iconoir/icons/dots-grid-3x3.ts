import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDotsGrid3x3Icon],svg[iconoir-dots-grid-3x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 6a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M12 6a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m6.5-13a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class IconoirDotsGrid3x3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
