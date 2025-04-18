import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSofaIcon],svg[icon-park-sofa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 21H4V35H12V21Z"></svg:path><svg:path fill="#2F88FF" d="M44 21H36V35H44V21Z"></svg:path><svg:path stroke-linecap="round" d="M36 27H12V35H36V27Z"></svg:path><svg:path stroke-linecap="round" d="M8 20V8H40V20"></svg:path><svg:path stroke-linecap="round" d="M8 36V40"></svg:path><svg:path stroke-linecap="round" d="M40 36V40"></svg:path></svg:g>`,
})
export class IconParkSofaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
