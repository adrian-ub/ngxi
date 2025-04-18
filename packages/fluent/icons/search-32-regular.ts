import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch32RegularIcon],svg[fluent-search-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.894 22.308A11.45 11.45 0 0 1 13.5 25C7.149 25 2 19.851 2 13.5S7.149 2 13.5 2S25 7.149 25 13.5a11.45 11.45 0 0 1-2.692 7.394l6.4 6.399a1 1 0 0 1-1.415 1.414zM23 13.5a9.5 9.5 0 1 0-19 0a9.5 9.5 0 0 0 19 0"></svg:path>`,
})
export class FluentSearch32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
