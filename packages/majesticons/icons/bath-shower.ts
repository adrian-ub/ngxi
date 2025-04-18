import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBathShowerIcon],svg[majesticons-bath-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20 14v-2H4v2c0 1.138.583 3.248 2.745 3.841c.37.102.787.159 1.255.159h8a4.7 4.7 0 0 0 1.255-.159C19.417 17.248 20 15.138 20 14"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m16 0a1 1 0 0 0 1-1V7c0-1-.6-3-3-3s-3 2-3 3m5 5v2c0 1.138-.583 3.248-2.745 3.841M20 12H4m0 0v2c0 1.138.583 3.248 2.745 3.841M6 20l.745-2.159m0 0c.37.102.787.159 1.255.159h8a4.7 4.7 0 0 0 1.255-.159M18 20l-.745-2.159M15 7h-2m2 0h2"></svg:path></svg:g>`,
})
export class MajesticonsBathShowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
