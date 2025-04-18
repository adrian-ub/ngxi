import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmarkNote20RegularIcon],svg[fluent-checkmark-note-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.668 9.126a.5.5 0 0 1 .706.042l3.647 4.104L16.147 3.146a.5.5 0 1 1 .707.708l-10.5 10.5a.5.5 0 0 1-.728-.022l-4-4.5a.5.5 0 0 1 .042-.706M11 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1m-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentCheckmarkNote20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
