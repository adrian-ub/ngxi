import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTaurusIcon],svg[icon-park-taurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="31" r="9" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M44 8C44 15.732 35.0457 22 24 22C12.9543 22 4 15.732 4 8"></svg:path></svg:g>`,
})
export class IconParkTaurusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
