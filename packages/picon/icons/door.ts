import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDoorIcon],svg[picon-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5V4H4v1M0 8V7h1V0h5v7h1v1"></svg:path>`,
})
export class PiconDoorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
