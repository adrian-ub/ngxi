import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainClionIcon],svg[devicon-plain-clion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.09 5.484L16.297 26.781L5.484 91.527l37.95 27.621l16.25-14.654L74.813 116.2l29.257 6.317l18.446-41.754l-21.446-7.994v28.302H26.93V26.93h74.14v37.037l19.118-23.408l-15.06-30.61l-28.425 10.285zM27.93 27.93v72.14h72.14V27.93zm21.09 8.117a14.28 14.28 0 0 1 10.898 4.266l-3.842 4.476a10.22 10.22 0 0 0-7.086-3.121c-4.656 0-8.008 3.863-8.008 8.605v.086c0 4.743 3.278 8.692 8.008 8.692c3.172 0 5.1-1.22 7.319-3.242l3.798 3.925a14.14 14.14 0 0 1-11.345 4.875a13.94 13.94 0 0 1-10.082-4.09a13.94 13.94 0 0 1-4.082-10.085v-.075a14.06 14.06 0 0 1 4.156-10.234a14.06 14.06 0 0 1 10.266-4.078m15.042.453h6.094v22.418h12.008V64H64.062zM36.547 86.746h27.43v4.574h-27.43z"></svg:path>`,
})
export class DeviconPlainClionIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
