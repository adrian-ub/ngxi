import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightThinIcon],svg[ph-arrow-elbow-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 80v72a4 4 0 0 1-8 0V89.66L122.83 194.83a4 4 0 0 1-5.66 0l-96-96a4 4 0 0 1 5.66-5.66L120 186.34L222.34 84H160a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowElbowRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
