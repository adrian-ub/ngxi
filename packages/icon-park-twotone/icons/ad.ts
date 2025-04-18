import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAdIcon],svg[icon-park-twotone-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAd0"><svg:g fill="none"><svg:circle cx="24" cy="24" r="20" fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m38 38l-3-3M10 10l3 3"></svg:path><svg:path fill="#555" d="M21.143 28L18 17l-3.143 11z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14 31l.857-3M22 31l-.857-3m0 0L18 17l-3.143 11m6.286 0h-6.286"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 24c0 5-3.582 7-8 7V17c4.418 0 8 2 8 7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAd0)"></svg:path>`,
})
export class IconParkTwotoneAdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
