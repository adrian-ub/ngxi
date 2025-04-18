import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPillFilledIcon],svg[tabler-pill-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.207 3.793a5.95 5.95 0 0 1 0 8.414l-8 8a5.95 5.95 0 0 1-8.414-8.414l8-8a5.95 5.95 0 0 1 8.414 0m-7 1.414L8.913 9.5l5.586 5.586l4.294-4.292a3.95 3.95 0 1 0-5.586-5.586"></svg:path>`,
})
export class TablerPillFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
