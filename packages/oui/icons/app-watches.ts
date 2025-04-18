import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppWatchesIcon],svg[oui-app-watches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.74 7.73l-1.5-1.32a13 13 0 0 0 0 17.19l1.5-1.32a11 11 0 0 1 0-14.54z"></svg:path><svg:path fill="currentColor" d="M6.51 3.66L5 2.34c-6.377 7.24-6.377 18.09 0 25.33l1.5-1.32C.792 19.867.792 10.153 6.5 3.67zm17.25 2.75l-1.5 1.32a11 11 0 0 1 0 14.54l1.5 1.32a13 13 0 0 0 0-17.19z"></svg:path><svg:path fill="currentColor" d="m27 2.34l-1.5 1.32c5.708 6.483 5.708 16.197 0 22.68l1.5 1.33c6.377-7.24 6.377-18.09 0-25.33"></svg:path><svg:path fill="currentColor" d="M21 15a5 5 0 1 0-6 4.9V31h2V19.9a5 5 0 0 0 4-4.9m-5 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiAppWatchesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
