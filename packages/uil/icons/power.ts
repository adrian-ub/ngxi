import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilPowerIcon],svg[uil-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.21 6.21l.79-.8V10a1 1 0 0 0 2 0V5.41l.79.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-2.5-2.5a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42M18 7.56A1 1 0 1 0 16.56 9a6.45 6.45 0 1 1-9.12 0A1 1 0 1 0 6 7.56a8.46 8.46 0 1 0 12 0"></svg:path>`,
})
export class UilPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
