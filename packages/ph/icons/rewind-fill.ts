import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRewindFillIcon],svg[ph-rewind-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 71.84v112.32a15.92 15.92 0 0 1-24.48 13.34L128 146.86v37.3a15.92 15.92 0 0 1-24.48 13.34l-88.19-56.16a15.8 15.8 0 0 1 0-26.68l88.19-56.16A15.91 15.91 0 0 1 128 71.84v37.3l79.52-50.64A15.91 15.91 0 0 1 232 71.84"></svg:path>`,
})
export class PhRewindFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
