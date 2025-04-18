import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsWeight24pxIcon],svg[healthicons-weight-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.056 3h13.888a2 2 0 0 1 1.999 2.056l-.389 14a2 2 0 0 1-2 1.944H5.446a2 2 0 0 1-2-1.945l-.388-14a2 2 0 0 1 2-2.055M7.21 5l.501 5.015a18 18 0 0 1 3.259-.486l.802-3.21a.75.75 0 0 1 1.456.363l-.707 2.825a18 18 0 0 1 3.767.508L16.79 5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWeight24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
