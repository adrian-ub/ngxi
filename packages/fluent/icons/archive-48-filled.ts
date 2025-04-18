import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchive48FilledIcon],svg[fluent-archive-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 8.75a2.5 2.5 0 0 1 2.5-2.5h30.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5zm2 9h31.5V34.5a7.25 7.25 0 0 1-7.25 7.25h-17a7.25 7.25 0 0 1-7.25-7.25zm12.25 4.5a1.25 1.25 0 1 0 0 2.5h7a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentArchive48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
