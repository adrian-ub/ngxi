import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEngineeringBrandIcon],svg[icon-park-engineering-brand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="20" x="5" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M12 26V42"></svg:path><svg:path stroke-linecap="round" d="M36 33H12"></svg:path><svg:path stroke-linecap="round" d="M16 42L8 42"></svg:path><svg:path stroke-linecap="round" d="M40 42L32 42"></svg:path><svg:path stroke-linecap="round" d="M36 26V42"></svg:path></svg:g>`,
})
export class IconParkEngineeringBrandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
