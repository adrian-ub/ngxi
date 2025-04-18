import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForwardDownPerson24FilledIcon],svg[fluent-arrow-forward-down-person-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.296 5.706a1 1 0 1 1 1.415-1.414l4.997 5.004a1 1 0 0 1 0 1.413l-4.997 4.998a1 1 0 1 1-1.415-1.414L19.59 11H13a8 8 0 0 1-7.996-7.75L5 3a1 1 0 0 1 2 0a6 6 0 0 0 5.775 5.996L13 9h6.586zM9 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C11 20.431 9.714 22 6.5 22S2 20.437 2 18.875v-.103C2 17.792 2.794 17 3.773 17h5.454c.98 0 1.773.793 1.773 1.772z"></svg:path>`,
})
export class FluentArrowForwardDownPerson24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
