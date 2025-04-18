import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneEmailBlockIcon],svg[icon-park-twotone-email-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTEmailBlock0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 35V9H4v28h22"></svg:path><svg:circle cx="35" cy="35" r="9" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m37 33l-4 4M4 9l20 13L44 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTEmailBlock0)"></svg:path>`,
})
export class IconParkTwotoneEmailBlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
