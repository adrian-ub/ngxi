import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCamera24FilledIcon],svg[fluent-camera-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.925 2.504a2.25 2.25 0 0 1 1.94 1.11l.814 1.387h2.071A3.25 3.25 0 0 1 22 8.25v9.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-9.5A3.25 3.25 0 0 1 5.25 5h2.08l.875-1.424a2.25 2.25 0 0 1 1.917-1.073zM12 8a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m0 1.5a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path>`,
})
export class FluentCamera24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
