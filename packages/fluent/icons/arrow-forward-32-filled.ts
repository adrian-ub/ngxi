import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForward32FilledIcon],svg[fluent-arrow-forward-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.866 6.366a1.25 1.25 0 0 0 0 1.768L24.732 13H15.25C8.485 13 3 18.485 3 25.25v.5a1.25 1.25 0 1 0 2.5 0v-.5a9.75 9.75 0 0 1 9.75-9.75h9.482l-4.866 4.866a1.25 1.25 0 0 0 1.768 1.768l7-7a1.25 1.25 0 0 0 0-1.768l-7-7a1.25 1.25 0 0 0-1.768 0"></svg:path>`,
})
export class FluentArrowForward32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
