import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCapricornusIcon],svg[icon-park-twotone-capricornus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCapricornus0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 11a6 6 0 0 0-12 0m12 0v18m12-18a6 6 0 0 0-12 0m12 0v24.75S30 43 22 43"></svg:path><svg:circle cx="36" cy="30" r="6" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCapricornus0)"></svg:path>`,
})
export class IconParkTwotoneCapricornusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
