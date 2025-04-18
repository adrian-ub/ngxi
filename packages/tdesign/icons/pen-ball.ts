import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPenBallIcon],svg[tdesign-pen-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.155 1.374l5.471 5.472l-1.414 1.414l-5.471-5.472zm-2.802 2.833l5.441 5.44L7.397 22.002H2v-5.397zm.002 2.83L4 17.43v2.571h2.57L16.964 9.645zm7.853 5.83l-6.244 6.243l-1.414-1.414l6.244-6.244z"></svg:path>`,
})
export class TdesignPenBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
