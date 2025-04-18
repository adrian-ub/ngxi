import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilPercentageIcon],svg[uil-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.758 10.758a3 3 0 1 0-3-3a3.003 3.003 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m8.484 6.484a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3.465-12.949a1 1 0 0 0-1.414 0l-14 14a1 1 0 1 0 1.414 1.414l14-14a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class UilPercentageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
