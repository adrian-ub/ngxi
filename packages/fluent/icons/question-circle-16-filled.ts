import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentQuestionCircle16FilledIcon],svg[fluent-question-circle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 8.5A.75.75 0 1 0 8 12a.75.75 0 0 0 0-1.5m0-6a2 2 0 0 0-2 2a.5.5 0 0 0 1 0a1 1 0 0 1 2 0c0 .37-.083.58-.366.898l-.116.125l-.264.27C7.712 8.36 7.5 8.768 7.5 9.5a.5.5 0 0 0 1 0c0-.37.083-.58.366-.898l.116-.125l.264-.27C9.788 7.64 10 7.232 10 6.5a2 2 0 0 0-2-2"></svg:path>`,
})
export class FluentQuestionCircle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
