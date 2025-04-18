import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAnswerBot26Icon],svg[garden-answer-bot-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="3" height="3" x="4" y="11" fill="currentColor" rx="3" ry="3"></svg:rect><svg:rect width="3" height="3" x="19" y="11" fill="currentColor" rx="3" ry="3"></svg:rect>`,
})
export class GardenAnswerBot26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
