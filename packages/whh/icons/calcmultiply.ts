import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCalcmultiplyIcon],svg[whh-calcmultiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-137-671q9-9 9-22t-9-22l-44-44q-10-9-22.5-9t-22.5 9l-158 159l-159-159q-9-9-22-9t-22 9l-44 44q-9 9-9 22t9 22l158 159l-158 158q-9 10-9 22.5t9 22.5l44 44q9 9 22 9t22-9l159-159l158 159q10 9 22.5 9t22.5-9l44-44q9-10 9-22.5t-9-22.5l-159-158z"></svg:path>`,
})
export class WhhCalcmultiplyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
