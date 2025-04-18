import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch32FilledIcon],svg[fluent-search-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 22.467A11.45 11.45 0 0 1 13.5 25C7.149 25 2 19.851 2 13.5S7.149 2 13.5 2S25 7.149 25 13.5c0 2.725-.948 5.229-2.532 7.2l6.167 6.166a1.25 1.25 0 0 1-1.768 1.768zm1.8-8.967a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class FluentSearch32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
