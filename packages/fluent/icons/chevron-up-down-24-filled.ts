import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronUpDown24FilledIcon],svg[fluent-chevron-up-down-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.79 8.387a1 1 0 0 1-1.497 1.32L12 4.414L6.707 9.707l-.094.083a1 1 0 0 1-1.32-1.497l6-6l.094-.083a1 1 0 0 1 1.32.083l6 6zM5.21 15.613a1 1 0 0 1 1.497-1.32L12 19.586l5.293-5.293l.094-.083a1 1 0 0 1 1.32 1.497l-6 6l-.094.083a1 1 0 0 1-1.32-.083l-6-6z"></svg:path>`,
})
export class FluentChevronUpDown24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
