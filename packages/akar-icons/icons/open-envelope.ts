import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsOpenEnvelopeIcon],svg[akar-icons-open-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M2 11.083a4 4 0 0 1 1.706-3.277l6-4.2a4 4 0 0 1 4.588 0l6 4.2A4 4 0 0 1 22 11.083V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path><svg:path d="m2.5 9.5l7.001 5.501a4 4 0 0 0 4.998 0L21.5 9.5"></svg:path></svg:g>`,
})
export class AkarIconsOpenEnvelopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
