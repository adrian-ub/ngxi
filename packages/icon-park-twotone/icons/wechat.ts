import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWechatIcon],svg[icon-park-twotone-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWechat0"><svg:g fill="none"><svg:path fill="#555" fill-rule="evenodd" d="M36.997 21.711C36.843 13.008 29.74 6 21 6C12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21l7.115-3.055q4.702 1.563 8.875.782" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36.997 21.711C36.843 13.008 29.74 6 21 6C12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21l7.115-3.055q4.702 1.563 8.875.782"></svg:path><svg:path fill="#fff" d="M15.125 20.467a2.26 2.26 0 0 0 2.25-2.267a2.26 2.26 0 0 0-2.25-2.267a2.26 2.26 0 0 0-2.25 2.267a2.26 2.26 0 0 0 2.25 2.267m9 0a2.26 2.26 0 0 0 2.25-2.267a2.26 2.26 0 0 0-2.25-2.267a2.26 2.26 0 0 0-2.25 2.267a2.26 2.26 0 0 0 2.25 2.267"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M38.762 39.93A10.45 10.45 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21S43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38.762 39.93A10.45 10.45 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21S43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M42.002 35.973L43 42l-4.238-2.07" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.002 35.973L43 42l-4.238-2.07"></svg:path><svg:path fill="#fff" d="M35.688 30.8A1.694 1.694 0 0 1 34 29.1c0-.939.755-1.7 1.688-1.7c.931 0 1.687.761 1.687 1.7s-.755 1.7-1.687 1.7m-6.75 0a1.694 1.694 0 0 1-1.688-1.7c0-.939.756-1.7 1.688-1.7s1.687.761 1.687 1.7s-.756 1.7-1.687 1.7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWechat0)"></svg:path>`,
})
export class IconParkTwotoneWechatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
