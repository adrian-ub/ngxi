import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFunctionArgumentLtrIcon],svg[ooui-function-argument-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a8 8 0 0 1-14.93 4H.832C2.375 17.532 5.9 20 10 20c5.523 0 10-4.477 10-10S15.523 0 10 0C5.9 0 2.375 2.468.832 6H3.07A8 8 0 0 1 18 10M2.062 11H8v4l6-5l-6-5v4H0v2z"></svg:path>`,
})
export class OouiFunctionArgumentLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
