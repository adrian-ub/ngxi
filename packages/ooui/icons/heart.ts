import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiHeartIcon],svg[ooui-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 1A5.24 5.24 0 0 0 10 4A5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1"></svg:path>`,
})
export class OouiHeartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
