import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForward48FilledIcon],svg[fluent-arrow-forward-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.44 10.56a1.5 1.5 0 0 1 2.12-2.12l11 11a1.5 1.5 0 0 1 0 2.12l-11 11a1.5 1.5 0 0 1-2.12-2.12L38.878 22H23.5C14.387 22 7 29.387 7 38.5a1.5 1.5 0 0 1-3 0C4 27.73 12.73 19 23.5 19h15.379z"></svg:path>`,
})
export class FluentArrowForward48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
