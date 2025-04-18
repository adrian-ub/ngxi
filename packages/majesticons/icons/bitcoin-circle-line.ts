import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBitcoinCircleLineIcon],svg[majesticons-bitcoin-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M8 8h5m1 4c.667 0 2-.4 2-2s-1.333-2-2-2h-1m1 4c.667 0 2 .4 2 2s-1.333 2-2 2h-1m1-4h-4m-2 4h5M10 6v6m0 6v-6m3-6v2m0 8v2"></svg:path></svg:g>`,
})
export class MajesticonsBitcoinCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
