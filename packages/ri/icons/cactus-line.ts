import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCactusLineIcon],svg[ri-cactus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.998 2a4 4 0 0 1 4 4v9h1c.55 0 1-.45 1-1V8a1 1 0 0 1 2 0v6c0 1.66-1.34 3-3 3h-1v3h2v2h-12v-2h2v-6h-1a3 3 0 0 1-3-3V9a1 1 0 1 1 2 0v2c0 .55.45 1 1 1h1V6a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v14h4V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class RiCactusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
