import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRamIcon],svg[picon-ram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5V4H4v1H0V4q2-1 0-2V1h8v1Q6 3 8 4v1"></svg:path>`,
})
export class PiconRamIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
