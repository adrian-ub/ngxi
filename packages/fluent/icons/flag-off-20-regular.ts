import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagOff20RegularIcon],svg[fluent-flag-off-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708L4 4.707V17.5a.5.5 0 0 0 1 0V13h7.293l4.853 4.854a.5.5 0 0 0 .708-.708zM11.293 12H5V5.707zm4.273 0H14.12l1 1h1.38a.5.5 0 0 0 .416-.777L14.101 8l2.815-4.223A.5.5 0 0 0 16.5 3H5.121l1 1h9.445l-2.482 3.723a.5.5 0 0 0 0 .554z"></svg:path>`,
})
export class FluentFlagOff20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
