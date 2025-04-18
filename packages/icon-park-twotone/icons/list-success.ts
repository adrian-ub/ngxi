import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneListSuccessIcon],svg[icon-park-twotone-list-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTListSuccess0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 10h24M20 24h24M20 38h24"></svg:path><svg:circle cx="8" cy="24" r="4" fill="#555"></svg:circle><svg:circle cx="8" cy="38" r="4" fill="#555"></svg:circle><svg:path d="m4 10l3 3l6-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTListSuccess0)"></svg:path>`,
})
export class IconParkTwotoneListSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
