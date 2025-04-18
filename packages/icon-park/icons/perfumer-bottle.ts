import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPerfumerBottleIcon],svg[icon-park-perfumer-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="24" x="5" y="17" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:rect width="20" height="10" x="14" y="7" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="12" height="8" x="18" y="25" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" d="M30 29H43"></svg:path><svg:path stroke="#fff" d="M5 29H18"></svg:path><svg:path stroke="#000" d="M5 24V34"></svg:path><svg:path stroke="#000" d="M43 24V34"></svg:path></svg:g>`,
})
export class IconParkPerfumerBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
