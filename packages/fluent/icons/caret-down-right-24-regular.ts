import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretDownRight24RegularIcon],svg[fluent-caret-down-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 7.811l-8.689 8.69h8.44a.25.25 0 0 0 .25-.25zm-.633-1.487c.787-.788 2.133-.23 2.133.884v9.042A1.75 1.75 0 0 1 16.25 18H7.208c-1.114 0-1.672-1.346-.884-2.133z"></svg:path>`,
})
export class FluentCaretDownRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
