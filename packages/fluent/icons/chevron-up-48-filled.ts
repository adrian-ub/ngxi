import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronUp48FilledIcon],svg[fluent-chevron-up-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.56 32.06a1.5 1.5 0 0 1-2.12 0L24 18.622l-13.44 13.44a1.5 1.5 0 0 1-2.12-2.122l14.5-14.5a1.5 1.5 0 0 1 2.12 0l14.5 14.5a1.5 1.5 0 0 1 0 2.122"></svg:path>`,
})
export class FluentChevronUp48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
