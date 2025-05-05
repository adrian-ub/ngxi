import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconQuestionIcon],svg[picon-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h5v1H4v1h3V1H1m3 5h1v1H4"></svg:path>`,
})
export class PiconQuestionIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
