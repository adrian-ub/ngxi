import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsDollarCircleLineIcon],svg[majesticons-dollar-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M15 8h-3m-3 8h3m0 0h1a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h1m0 8v2m0-10V6"></svg:path></svg:g>`,
})
export class MajesticonsDollarCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
