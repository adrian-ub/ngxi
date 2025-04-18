import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills3NegativeIcon],svg[healthicons-pills-3-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPills3Negative0)"><svg:path d="M24.385 9.91a1 1 0 0 1 .913 1.08l-.602 7.187a1 1 0 0 1-1.994-.167l.603-7.187a1 1 0 0 1 1.08-.913m-6.628 26.847a1 1 0 0 1-1.414 0l-5.1-5.1a1 1 0 0 1 1.414-1.414l5.1 5.1a1 1 0 0 1 0 1.414m19.458-5.707a1 1 0 0 0-.762-1.848l-6.668 2.748a1 1 0 0 0 .762 1.849z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM32.5 14.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0m-9.5 19a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0M33.5 40a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPills3Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPills3NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
