import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowAutofitDown20RegularIcon],svg[fluent-arrow-autofit-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.142 15.19l-1.14 1.18V2.5a.5.5 0 1 0-1 0v13.874l-1.142-1.183a.5.5 0 1 0-.72.694l1.821 1.886a.75.75 0 0 0 1.08 0l1.82-1.886a.5.5 0 1 0-.72-.694M5 17a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 1 1 0 1z"></svg:path>`,
})
export class FluentArrowAutofitDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
