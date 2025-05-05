import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconInfinityIcon],svg[picon-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c7-1 4 7 0 3c-4-5-4 1-1 0l1 1c-7 1-4-7 0-3c4 5 4-1 1 0"></svg:path>`,
})
export class PiconInfinityIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
