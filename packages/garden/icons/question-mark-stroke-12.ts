import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenQuestionMarkStroke12Icon],svg[garden-question-mark-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M5.5 7.5V7c0-.7.4-1.3 1-1.6c.7-.4 1.2-1.3 1-2.2c-.1-.8-.8-1.5-1.7-1.7c-1-.2-2 .5-2.3 1.4"></svg:path><svg:circle cx="5.5" cy="10" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenQuestionMarkStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
