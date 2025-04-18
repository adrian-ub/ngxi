import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenQuestionMarkStroke16Icon],svg[garden-question-mark-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.5" cy="13.5" r="1" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M7.5 10.5V9.4c0-1 .6-1.8 1.4-2.3c1.1-.6 1.8-1.8 1.6-3.1c-.3-1.3-1.2-2.2-2.5-2.5c-1.5-.3-2.9.6-3.4 2"></svg:path>`,
})
export class GardenQuestionMarkStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
