import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaFlagIcon],svg[iwwa-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.91 29.83a1 1 0 0 1-.707-.293l-11.48-11.48l1.414-1.414L16.91 27.416l16.953-16.953l1.414 1.414l-17.66 17.66a1 1 0 0 1-.707.293"></svg:path>`,
})
export class IwwaFlagIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
