import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsDialPadIcon],svg[zondicons-dial-pad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4M5 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4M5 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class ZondiconsDialPadIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
