import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneEngineeringBrandIcon],svg[icon-park-twotone-engineering-brand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTEngineeringBrand0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="20" x="5" y="6" fill="#555" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M12 26v16m24-9H12m4 9H8m32 0h-8m4-16v16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTEngineeringBrand0)"></svg:path>`,
})
export class IconParkTwotoneEngineeringBrandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
