import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEngineeringBrandIcon],svg[icon-park-solid-engineering-brand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="20" x="5" y="6" fill="currentColor" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M12 26v16m24-9H12m4 9H8m32 0h-8m4-16v16"></svg:path></svg:g>`,
})
export class IconParkSolidEngineeringBrandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
