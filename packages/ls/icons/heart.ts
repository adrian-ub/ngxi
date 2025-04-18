import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsHeartIcon],svg[ls-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M582 30c166 0 221 192 163 297c-89 163-361 336-361 336S111 490 23 327C-35 222 19 30 186 30c154 0 193 133 198 153c5-20 44-153 198-153"></svg:path>`,
})
export class LsHeartIcon {
  readonly viewBox = input("0 0 768 663")
  readonly width = input("1.16em")
  readonly height = input("1em")
}
