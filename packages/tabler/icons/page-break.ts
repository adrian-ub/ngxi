import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPageBreakIcon],svg[tabler-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4m0 10v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1m-2-4h3m4.5 0h3m4.5 0h3"></svg:path><svg:path d="M5 10V5a2 2 0 0 1 2-2h7l5 5v2"></svg:path></svg:g>`,
})
export class TablerPageBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
