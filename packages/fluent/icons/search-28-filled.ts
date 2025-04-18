import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch28FilledIcon],svg[fluent-search-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.473 18.888A9.46 9.46 0 0 1 11.5 21a9.5 9.5 0 1 1 9.5-9.5a9.46 9.46 0 0 1-2.113 5.973l5.82 5.82a1 1 0 0 1-1.414 1.414zM19 11.5a7.5 7.5 0 1 0-15 0a7.5 7.5 0 0 0 15 0"></svg:path>`,
})
export class FluentSearch28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
