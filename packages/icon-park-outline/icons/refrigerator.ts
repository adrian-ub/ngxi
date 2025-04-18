import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRefrigeratorIcon],svg[icon-park-outline-refrigerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="36" x="9" y="4" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M9 22h28M9 20v4m28-4v4m-22 5v4m0-22v4m18 25v4m-20-4v4"></svg:path></svg:g>`,
})
export class IconParkOutlineRefrigeratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
