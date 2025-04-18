import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCar4wdFilledIcon],svg[tabler-car-4wd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0h-1v10h1a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0h-4a3 3 0 0 1-6 0v-2a3 3 0 0 1 6 0h1V7h-1a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0h4a3 3 0 0 1 3-3"></svg:path>`,
})
export class TablerCar4wdFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
