import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsScienceIcon],svg[eos-icons-science-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.68 22H5.32a2.318 2.318 0 0 1-1.96-3.55L4.27 17L9 9.46V3H7V1h10v2h-2v6.46L19.73 17l.91 1.45A2.318 2.318 0 0 1 18.68 22"></svg:path>`,
})
export class EosIconsScienceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
