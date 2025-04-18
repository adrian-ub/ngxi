import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phYinYangFillIcon],svg[ph-yin-yang-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m92 48A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-92 48a12 12 0 1 0-12 12a12 12 0 0 0 12-12m32-92a44.05 44.05 0 0 0-44-44a88 88 0 0 0-46.91 162.42A52 52 0 0 1 128 128a44.05 44.05 0 0 0 44-44"></svg:path>`,
})
export class PhYinYangFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
