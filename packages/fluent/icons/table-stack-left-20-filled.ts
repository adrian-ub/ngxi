import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackLeft20FilledIcon],svg[fluent-table-stack-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0zM17 5v2h-4V3h2a2 2 0 0 1 2 2m-5-2v4H8V3.5a.5.5 0 0 1 .5-.5zm0 5H8v4h4zm5 4V8h-4v4zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5zm9 0v2a2 2 0 0 1-2 2h-2v-4z"></svg:path>`,
})
export class FluentTableStackLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
