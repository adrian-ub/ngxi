import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHiitIcon],svg[arcticons-hiit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.054 45.107a19.163 19.163 0 0 1-6.143-30.19m2.443-2.279A19.16 19.16 0 0 1 39.15 8.812"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.911 14.917l-1.923-1.91l-1.407 1.323l-1.923-1.969l5.404-4.948l1.816 1.93l-1.475 1.339l1.951 1.956m10.024-.648l4.33 16.106l-8.934 10.223m8.935-10.223l5.745 2.557"></svg:path>`,
})
export class ArcticonsHiitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
