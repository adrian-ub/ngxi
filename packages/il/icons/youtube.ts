import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilYoutubeIcon],svg[il-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M422 2q101 0 171 4t116 16t71 33t37 57t15 86t2 121l-2 121q-1 50-15 86t-37 56t-71 34t-116 16t-171 4t-171-4t-116-16t-71-34t-37-56t-14-86t-3-121t3-121t14-86t37-57t71-33T251 6t171-4m132 331q12-6 12-14t-12-14l-185-86q-12-6-20-1t-9 20v162q0 14 9 19t20 0z"></svg:path>`,
})
export class IlYoutubeIcon {
  readonly viewBox = input("0 0 840 790")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
