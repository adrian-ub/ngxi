import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBoyOneIcon],svg[icon-park-boy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7"></svg:circle><svg:path d="M27 44H21L8 24H40L27 44Z"></svg:path></svg:g>`,
})
export class IconParkBoyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
