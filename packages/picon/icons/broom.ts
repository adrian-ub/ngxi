import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBroomIcon],svg[picon-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4H4l3-4h1M5 5L4 8V6L3 7L0 6l3-2"></svg:path>`,
})
export class PiconBroomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
