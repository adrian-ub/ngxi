import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarDismiss16FilledIcon],svg[fluent-star-dismiss-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.194 2.102a.9.9 0 0 1 1.614 0l1.433 2.904A5.5 5.5 0 0 0 5.87 13.47l-.911.479A.9.9 0 0 1 3.653 13l.58-3.387l-2.46-2.4a.9.9 0 0 1 .499-1.534l3.4-.495zM15 10.501a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.147a.5.5 0 0 0-.708-.707L10.5 9.793L9.354 8.647a.5.5 0 1 0-.708.707l1.147 1.147l-1.147 1.146a.5.5 0 0 0 .708.707l1.146-1.146l1.146 1.146a.5.5 0 0 0 .708-.707L11.207 10.5z"></svg:path>`,
})
export class FluentStarDismiss16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
