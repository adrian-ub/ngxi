import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackRight16FilledIcon],svg[fluent-table-stack-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zM10 11v2.5a.5.5 0 0 1-.5.5H6v-3zm0-1V6H6v4zM6 2h3.5a.5.5 0 0 1 .5.5V5H6zM5 5V2h-.5A2.5 2.5 0 0 0 2 4.5V5zM2 6v4h3V6zm0 5.5V11h3v3h-.5A2.5 2.5 0 0 1 2 11.5"></svg:path>`,
})
export class FluentTableStackRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
