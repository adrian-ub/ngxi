import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookInformation20FilledIcon],svg[fluent-book-information-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zm4.75 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.25 6.75a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0z"></svg:path>`,
})
export class FluentBookInformation20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
