import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCrosshairSquareIcon],svg[lucide-lab-crosshair-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H5a2 2 0 0 0-2 2v3m9-5v5m9 0V5a2 2 0 0 0-2-2h-3m0 9h5m-5 9h3a2 2 0 0 0 2-2v-3m-9 0v5m-9-5v3a2 2 0 0 0 2 2h3m-5-9h5m4 0h.01"></svg:path>`,
})
export class LucideLabCrosshairSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
