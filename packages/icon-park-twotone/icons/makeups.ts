import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMakeupsIcon],svg[icon-park-twotone-makeups-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMakeups0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4"></svg:path><svg:path d="m37.61 9.472l.255.786h.827l-.669.486l.255.786l-.668-.486l-.669.486l.255-.786l-.668-.486h.826z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 31s2 4 8 4s8-4 8-4"></svg:path><svg:circle cx="17" cy="22" r="3" fill="#555"></svg:circle><svg:circle cx="31" cy="22" r="3" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMakeups0)"></svg:path>`,
})
export class IconParkTwotoneMakeupsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
