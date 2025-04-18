import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phYinYangBoldIcon],svg[ph-yin-yang-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20M44 128a84.09 84.09 0 0 1 84-84a36 36 0 0 1 0 72a60 60 0 0 0-58.81 71.9A83.73 83.73 0 0 1 44 128m84 84a36 36 0 0 1 0-72a60 60 0 0 0 58.81-71.9A83.94 83.94 0 0 1 128 212m16-36a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-32-96a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhYinYangBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
