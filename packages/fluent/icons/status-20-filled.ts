import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStatus20FilledIcon],svg[fluent-status-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.354 2.647a2.62 2.62 0 0 0-3.707 0l-5.5 5.5a.5.5 0 0 0-.132.232l-1 4a.5.5 0 0 0 .606.606l4-1a.5.5 0 0 0 .233-.131l5.5-5.5a2.62 2.62 0 0 0 0-3.707m-1.41 6.53Q16 9.582 16 10a6 6 0 1 1-5.177-5.944l.854-.854a7 7 0 1 0 5.121 5.121z"></svg:path>`,
})
export class FluentStatus20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
