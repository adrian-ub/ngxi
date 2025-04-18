import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabJugIcon],svg[lucide-lab-jug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m19 3l-2 5H5L3 3zm0 0c1.7 0 3 1.3 3 3v4M2 16c1.08-.5 2.16-1 4.5-1c4.5 0 4.5 2 9 2c2.34 0 3.42-.5 4.5-1"></svg:path><svg:path d="M15 21a5 5 0 0 0 4.48-7.22L17 8H5l-2.5 5.8A5 5 0 0 0 7 21Z"></svg:path></svg:g>`,
})
export class LucideLabJugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
