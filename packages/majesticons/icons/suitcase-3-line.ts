import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSuitcase3LineIcon],svg[majesticons-suitcase-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1m6 0h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1M15 6H9m0 0H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1m2-10v6m6 0v-6M7 20v1m0-1h10m0 0v1"></svg:path>`,
})
export class MajesticonsSuitcase3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
