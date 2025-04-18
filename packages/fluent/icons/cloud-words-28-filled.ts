import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudWords28FilledIcon],svg[fluent-cloud-words-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.069 11.017a7.001 7.001 0 0 1 13.862 0A5.5 5.5 0 0 1 20.5 22h-13a5.5 5.5 0 0 1-.431-10.983M11.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM6 16.25c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75m9.75-.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentCloudWords28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
