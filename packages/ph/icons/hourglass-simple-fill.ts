import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleFillIcon],svg[ph-hourglass-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.31 196.69A16 16 0 0 1 200 224H56a16 16 0 0 1-11.32-27.31a2 2 0 0 0 .13-.13L116.43 128L44.82 59.44a2 2 0 0 0-.13-.13A16 16 0 0 1 56 32h144a16 16 0 0 1 11.32 27.31a2 2 0 0 0-.13.13L139.57 128l71.61 68.56a2 2 0 0 0 .13.13"></svg:path>`,
})
export class PhHourglassSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
