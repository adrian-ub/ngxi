import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowAutofitHeightIn20RegularIcon],svg[fluent-arrow-autofit-height-in-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.854 7.854l2-2a.5.5 0 0 0-.708-.708L15 6.293V2.5a.5.5 0 0 0-1 0v3.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0M3 5a2 2 0 0 1 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2zm13.854 9.146l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708L14 13.707V17.5a.5.5 0 0 0 1 0v-3.793l1.146 1.147a.5.5 0 0 0 .708-.708"></svg:path>`,
})
export class FluentArrowAutofitHeightIn20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
