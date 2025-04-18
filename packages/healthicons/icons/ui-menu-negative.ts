import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuNegativeIcon],svg[healthicons-ui-menu-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiMenuNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM7 10a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2zM6 24a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 12a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiMenuNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiMenuNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
