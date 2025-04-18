import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHamburgerOneIcon],svg[icon-park-twotone-hamburger-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHamburgerOne0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 22v-1c0-8.837-7.163-16-16-16S8 12.163 8 21v1m0 12s-2 5 2 7s24 2 28 0s2-7 2-7"></svg:path><svg:rect width="38" height="14" x="5" y="21" fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="7"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m11 29l1.592-.796A6 6 0 0 1 17.5 28l.424.17A4.98 4.98 0 0 0 22 28v0a4.98 4.98 0 0 1 4.076-.17l.96.384a4.7 4.7 0 0 0 3.857-.16v0a4.71 4.71 0 0 1 4.214 0L37 29"></svg:path><svg:circle cx="17" cy="15.05" r="2.5" fill="#fff"></svg:circle><svg:circle cx="23.75" cy="12.3" r="2.5" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHamburgerOne0)"></svg:path>`,
})
export class IconParkTwotoneHamburgerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
