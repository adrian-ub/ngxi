import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshAltIcon],svg[zmdi-refresh-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m384 107l85 85h-64q0 71-50 121t-120 50q-49 0-91-27l31-31q27 15 60 15q53 0 90.5-37.5T363 192h-64zm-277 85h64l-86 85l-85-85h64q0-71 50-121t121-50q49 0 91 27l-32 31q-27-15-59-15q-53 0-90.5 37.5T107 192"></svg:path>`,
})
export class ZmdiRefreshAltIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
