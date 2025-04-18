import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnImageIcon],svg[typcn-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.5" cy="8.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 10c-2 0-3 3-4.5 3s-1.499-1-3.5-1s-3.001 4-3.001 4H19s-1-6-3-6m4-7H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m0 14H4V5h16z"></svg:path>`,
})
export class TypcnImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
