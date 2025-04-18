import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrepaidguthabenIcon],svg[arcticons-prepaidguthaben-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="29.88" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="13.62" ry="13.633"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.12 37.633A13.626 13.626 0 0 1 4.5 24h0a13.626 13.626 0 0 1 13.62-13.633"></svg:path>`,
})
export class ArcticonsPrepaidguthabenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
