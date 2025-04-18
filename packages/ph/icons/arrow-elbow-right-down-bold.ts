import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDownBoldIcon],svg[ph-arrow-elbow-right-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 168.49l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L164 179V76H32a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12v115l27.51-27.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowElbowRightDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
