import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUserListThinIcon],svg[ph-user-list-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 80a4 4 0 0 1 4-4h88a4 4 0 0 1 0 8h-88a4 4 0 0 1-4-4m92 44h-88a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8m0 48h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-100.13 19a4 4 0 0 1-2.87 4.87a4 4 0 0 1-1 .13a4 4 0 0 1-3.87-3c-6.71-26.08-32-45-60.13-45s-53.41 18.92-60.13 45a4 4 0 1 1-7.74-2c5.92-23 24.57-41.14 47.52-48a44 44 0 1 1 40.7 0c22.95 6.86 41.65 25 47.52 48M80 140a36 36 0 1 0-36-36a36 36 0 0 0 36 36"></svg:path>`,
})
export class PhUserListThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
