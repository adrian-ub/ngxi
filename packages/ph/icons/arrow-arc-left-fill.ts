import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftFillIcon],svg[ph-arrow-arc-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 184a8 8 0 0 1-16 0a88 88 0 0 0-148.53-63.84l26.19 26.18A8 8 0 0 1 88 160H24a8 8 0 0 1-8-8V88a8 8 0 0 1 13.66-5.66l26.48 26.48A104 104 0 0 1 232 184"></svg:path>`,
})
export class PhArrowArcLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
