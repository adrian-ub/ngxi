import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerQuotesIcon],svg[tabler-quotes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c-1.333-1.854-1.333-4.146 0-6m4 6c-1.333-1.854-1.333-4.146 0-6m8 12c1.333-1.854 1.333-4.146 0-6m4 6c1.333-1.854 1.333-4.146 0-6"></svg:path>`,
})
export class TablerQuotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
