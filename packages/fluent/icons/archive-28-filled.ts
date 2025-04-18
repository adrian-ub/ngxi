import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchive28FilledIcon],svg[fluent-archive-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h19A1.5 1.5 0 0 1 25 4.5v2A1.5 1.5 0 0 1 23.5 8h-19A1.5 1.5 0 0 1 3 6.5zm1 5h20v10.75A4.75 4.75 0 0 1 19.25 25H8.75A4.75 4.75 0 0 1 4 20.25zm7.75 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentArchive28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
