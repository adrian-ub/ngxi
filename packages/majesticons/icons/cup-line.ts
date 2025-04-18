import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCupLineIcon],svg[majesticons-cup-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5H4v7a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1m0-6v6m0-6h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2M4 19h14"></svg:path>`,
})
export class MajesticonsCupLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
