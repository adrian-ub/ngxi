import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearchInfo20FilledIcon],svg[fluent-search-info-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.73 13.436a6.5 6.5 0 1 1 .707-.707l3.416 3.418a.5.5 0 0 1-.637.764l-.07-.057zM8.5 7.5A.5.5 0 0 0 8 8v3a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5m0-1a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentSearchInfo20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
