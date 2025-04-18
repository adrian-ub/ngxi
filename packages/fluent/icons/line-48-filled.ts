import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLine48FilledIcon],svg[fluent-line-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.56 4.44a1.5 1.5 0 0 1 0 2.12l-37 37a1.5 1.5 0 0 1-2.12-2.12l37-37a1.5 1.5 0 0 1 2.12 0"></svg:path>`,
})
export class FluentLine48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
