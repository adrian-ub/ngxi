import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBreadFillIcon],svg[ph-bread-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40 40 0 0 0 200 40m-56 64a8 8 0 0 0 0 16v80H48v-80a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhBreadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
