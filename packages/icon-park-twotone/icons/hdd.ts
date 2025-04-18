import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHddIcon],svg[icon-park-twotone-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHdd0"><svg:g fill="none"><svg:rect width="30" height="40" x="9" y="4" fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="32" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="16" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="32" cy="38" r="2" fill="#fff"></svg:circle><svg:circle cx="16" cy="38" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30a8 8 0 1 0-8-8m8 0l-6 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHdd0)"></svg:path>`,
})
export class IconParkTwotoneHddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
