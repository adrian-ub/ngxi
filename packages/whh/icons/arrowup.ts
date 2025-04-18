import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhArrowupIcon],svg[whh-arrowup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m557 19l448 452q19 19 19 45.5t-19 45.5l-90 91q-19 19-45.5 19T824 653L640 468v491q0 27-18.5 45.5T576 1023H449q-27 0-45.5-18.5T385 959V467L200 653q-19 19-45.5 19T109 653l-90-91Q0 543 0 516.5T19 471L467 19q18-19 45-19t45 19"></svg:path>`,
})
export class WhhArrowupIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
