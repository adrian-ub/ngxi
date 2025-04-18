import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBroadcastBoldIcon],svg[ph-broadcast-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20m77.39 12.7a84 84 0 0 1-14.78 23.3a12 12 0 0 1-17.89-16a59.92 59.92 0 0 0 0-80a12 12 0 0 1 17.89-16a84.07 84.07 0 0 1 14.78 88.7M83.28 168a12 12 0 0 1-17.89 16a83.94 83.94 0 0 1 0-112a12 12 0 0 1 17.89 16a59.92 59.92 0 0 0 0 80M252 128a123.63 123.63 0 0 1-35.43 86.78A12 12 0 1 1 199.43 198a99.88 99.88 0 0 0 0-140a12 12 0 0 1 17.14-16.8A123.63 123.63 0 0 1 252 128M56.57 198a12 12 0 0 1-17.14 16.8a123.89 123.89 0 0 1 0-173.56A12 12 0 0 1 56.57 58a99.88 99.88 0 0 0 0 140"></svg:path>`,
})
export class PhBroadcastBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
