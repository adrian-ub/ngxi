import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsJOutlineIcon],svg[healthicons-j-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27 12a3 3 0 1 1 6 0v18a9 9 0 1 1-18 0a3 3 0 0 1 6 0a3 3 0 1 0 6 0zm3-1a1 1 0 0 0-1 1v18a5 5 0 0 1-10 0a1 1 0 1 0-2 0a7 7 0 1 0 14 0V12a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsJOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
