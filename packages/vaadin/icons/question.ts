import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinQuestionIcon],svg[vaadin-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11H6c0-3 1.6-4 2.7-4.6q.6-.3.9-.6c.5-.5.3-1.2.2-1.4c-.3-.7-1-1.4-2.3-1.4C5.4 3 5 4.9 5 5.3l-3-.4C2.2 3.2 3.7 0 7.5 0c2.3 0 4.3 1.3 5.1 3.2c.7 1.7.4 3.5-.8 4.7c-.5.5-1.1.8-1.6 1.1c-.9.5-1.2 1-1.2 2m.5 3a2 2 0 1 1-3.999.001A2 2 0 0 1 9.5 14"></svg:path>`,
})
export class VaadinQuestionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
