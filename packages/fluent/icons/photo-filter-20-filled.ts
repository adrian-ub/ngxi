import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhotoFilter20FilledIcon],svg[fluent-photo-filter-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.257 13.743a6 6 0 1 1 7.486-7.486a6 6 0 1 1-7.486 7.486M3.5 8A4.5 4.5 0 0 0 6 12.032V12a6 6 0 0 1 6.032-6A4.5 4.5 0 0 0 3.5 8m4.468 6A4.5 4.5 0 1 0 14 7.968V8a6 6 0 0 1-6 6z"></svg:path>`,
})
export class FluentPhotoFilter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
