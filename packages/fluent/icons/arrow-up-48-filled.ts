import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp48FilledIcon],svg[fluent-arrow-up-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 44.25a1.5 1.5 0 0 1-1.5-1.5V10.915L10.32 23.302a1.5 1.5 0 1 1-2.14-2.104L22.928 6.201l.02-.02a1.5 1.5 0 0 1 2.145.042L39.82 21.198a1.5 1.5 0 1 1-2.139 2.104L25.5 10.915V42.75a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class FluentArrowUp48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
