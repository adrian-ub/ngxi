import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenQuestionMarkFill16Icon],svg[garden-question-mark-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 10.5V9.4c0-1 .6-1.8 1.4-2.3c1.1-.6 1.8-1.8 1.6-3.1c-.2-1.2-1.2-2.2-2.4-2.4c-1.6-.3-3 .6-3.4 1.9"></svg:path>`,
})
export class GardenQuestionMarkFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
