import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTumblrFillIcon],svg[ri-tumblr-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.27 7.63A5.76 5.76 0 0 0 10.817 2h3.03v5.152h3.637v3.636h-3.637v5.454c0 .515.198 1.207.91 1.667q.711.46 3.03.455V22h-4.243a4.546 4.546 0 0 1-4.545-4.546v-6.666H6.27z"></svg:path>`,
})
export class RiTumblrFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
