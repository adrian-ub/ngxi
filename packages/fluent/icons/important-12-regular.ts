import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImportant12RegularIcon],svg[fluent-important-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.283 2.98a1.735 1.735 0 1 1 3.434 0l-.576 4.03a1.153 1.153 0 0 1-2.282 0zm2.444-.142a.735.735 0 1 0-1.454 0l.576 4.03a.153.153 0 0 0 .303 0zM6 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentImportant12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
