import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnThListIcon],svg[typcn-th-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2m0-7h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2m0-7h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2"></svg:path><svg:circle cx="5" cy="19" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="5" cy="12" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="5" cy="5" r="2.5" fill="currentColor"></svg:circle>`,
})
export class TypcnThListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
