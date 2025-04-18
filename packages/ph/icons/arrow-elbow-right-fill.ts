import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightFillIcon],svg[ph-arrow-elbow-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 80v72a8 8 0 0 1-13.66 5.66L196 127.31l-70.34 70.35a8 8 0 0 1-11.32 0l-96-96a8 8 0 0 1 11.32-11.32L120 180.69L184.69 116l-30.35-30.34A8 8 0 0 1 160 72h72a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowElbowRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
