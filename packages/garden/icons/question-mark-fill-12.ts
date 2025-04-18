import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenQuestionMarkFill12Icon],svg[garden-question-mark-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v-.5c0-.7.4-1.3 1-1.6c.7-.4 1.2-1.3 1-2.2c-.2-.8-.9-1.5-1.7-1.7c-1.1-.2-2 .5-2.3 1.4"></svg:path><svg:circle cx="6" cy="10.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class GardenQuestionMarkFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
