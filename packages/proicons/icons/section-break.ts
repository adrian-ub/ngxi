import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSectionBreakIcon],svg[proicons-section-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12h18.5M4 2.75V5.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2.75M4 21.25V18.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.75"></svg:path>`,
})
export class ProiconsSectionBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
