import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePhonographIcon],svg[icon-park-twotone-phonograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPhonograph0"><svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" stroke="#fff" stroke-width="4" rx="3"></svg:rect><svg:circle cx="24" cy="25" r="11" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:rect width="4" height="4" x="22" y="23" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="34" y="34" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m28 20l8-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPhonograph0)"></svg:path>`,
})
export class IconParkTwotonePhonographIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
