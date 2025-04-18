import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBlock20FilledIcon],svg[fluent-block-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16zm3.5 7.5h-7l-.09.008a.5.5 0 0 0 .09.992h7l.09-.008a.5.5 0 0 0-.09-.992z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentBlock20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
