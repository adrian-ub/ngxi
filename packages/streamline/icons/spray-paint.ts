import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSprayPaintIcon],svg[streamline-spray-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 4.5h-4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1M3.5 2v2.5m5-3l5-1m-5 3l5 1M2.5 2h2"></svg:path>`,
})
export class StreamlineSprayPaintIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
