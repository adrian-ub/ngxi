import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce48FilledIcon],svg[fluent-arrow-bounce-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14.5A1.5 1.5 0 0 1 5.5 13h15a1.5 1.5 0 0 1 0 3H9.189l15.813 15.407l16.453-15.983a1.5 1.5 0 1 1 2.09 2.152l-17.5 17a1.5 1.5 0 0 1-2.092-.002L7 18.056V29.5a1.5 1.5 0 0 1-3 0z"></svg:path>`,
})
export class FluentArrowBounce48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
