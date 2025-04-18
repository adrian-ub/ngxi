import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUOutlineIcon],svg[healthicons-u-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 1 1 6 0v16a5 5 0 0 0 10 0V12a3 3 0 1 1 6 0v16c0 6.075-4.925 11-11 11s-11-4.925-11-11zm3-1a1 1 0 0 0-1 1v16a9 9 0 1 0 18 0V12a1 1 0 1 0-2 0v16a7 7 0 1 1-14 0V12a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
