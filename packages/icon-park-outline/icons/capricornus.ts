import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCapricornusIcon],svg[icon-park-outline-capricornus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 11a6 6 0 0 0-12 0m12 0v18m12-18a6 6 0 0 0-12 0m12 0v24.75S30 43 22 43"></svg:path><svg:circle cx="36" cy="30" r="6"></svg:circle></svg:g>`,
})
export class IconParkOutlineCapricornusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
