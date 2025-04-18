import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackRight20FilledIcon],svg[fluent-table-stack-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM3 15v-2h4v4H5a2 2 0 0 1-2-2m5 2v-4h4v3.5a.5.5 0 0 1-.5.5zm0-5h4V8H8zM3 8v4h4V8zm9-1H8V3h3.5a.5.5 0 0 1 .5.5zM3 7V5a2 2 0 0 1 2-2h2v4z"></svg:path>`,
})
export class FluentTableStackRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
