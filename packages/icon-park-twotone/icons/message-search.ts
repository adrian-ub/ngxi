import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMessageSearchIcon],svg[icon-park-twotone-message-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMessageSearch0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25.5 37H21l-10 5v-5H4V7h40v11"></svg:path><svg:circle cx="34" cy="28" r="6" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m39 32l5 4M12 15h6m-6 6h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMessageSearch0)"></svg:path>`,
})
export class IconParkTwotoneMessageSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
