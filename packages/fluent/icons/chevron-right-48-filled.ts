import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronRight48FilledIcon],svg[fluent-chevron-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.94 39.31a1.5 1.5 0 0 1 0-2.12l13.439-13.44l-13.44-13.44a1.5 1.5 0 0 1 2.122-2.12l14.5 14.5a1.5 1.5 0 0 1 0 2.12l-14.5 14.5a1.5 1.5 0 0 1-2.122 0"></svg:path>`,
})
export class FluentChevronRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
