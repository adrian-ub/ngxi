import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceGalleryIcon],svg[guidance-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 19.5c3.314 0 6-2.5 6-4.5m0 0c0 2 2.686 4.5 6 4.5s6-2.5 6-4.5M6 15v8.5M18 15c0 2 2.686 4.5 6 4.5M18 15v8.5m-14 0h4m8 0h4m1.5-11h-19V.5h19z"></svg:path>`,
})
export class GuidanceGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
