import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPenBallFilledIcon],svg[tdesign-pen-ball-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.155 1.374l5.472 5.472l-1.414 1.414l-5.472-5.472zm-2.802 2.833l5.442 5.44L7.397 22.002H2v-5.397zm7.855 8.66l-6.243 6.243l-1.415-1.414l6.244-6.244z"></svg:path>`,
})
export class TdesignPenBallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
