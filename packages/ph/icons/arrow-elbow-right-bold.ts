import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightBoldIcon],svg[ph-arrow-elbow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 80v72a12 12 0 0 1-24 0v-43l-91.51 91.52a12 12 0 0 1-17 0l-96-96a12 12 0 0 1 17-17L120 175l83-83h-43a12 12 0 0 1 0-24h72a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowElbowRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
