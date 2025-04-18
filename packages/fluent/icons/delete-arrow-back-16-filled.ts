import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeleteArrowBack16FilledIcon],svg[fluent-delete-arrow-back-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a1 1 0 0 0-2 0zM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-.233 1.71A5.5 5.5 0 0 0 7.337 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm4.5 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 13 12.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75H8.707l.897.896a.5.5 0 0 1-.708.708L7.144 10.35a.5.5 0 0 1 .002-.705l1.75-1.75a.5.5 0 1 1 .708.708"></svg:path>`,
})
export class FluentDeleteArrowBack16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
