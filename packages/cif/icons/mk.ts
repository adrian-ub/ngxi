import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifMkIcon],svg[cif-mk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D20000" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFE600" d="M.5.5h45l105 72.321L255.5.5h45l-300 150h45l105-72.321l105 72.321h45zm300 60v30l-300-30v30zm-165-60l15 64.286L165.5.5zm0 150l15-64.286l15 64.286z"></svg:path><svg:circle cx="150.5" cy="75.5" r="24.107" fill="#FFE600" stroke="#D20000" stroke-width="4.286"></svg:circle></svg:g>`,
})
export class CifMkIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
