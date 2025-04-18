import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBestbuyIcon],svg[arcticons-bestbuy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.22 11.24L4.5 18.86v10.42l7.5 7.48h31.5V11.24ZM9.63 21.75a1.94 1.94 0 1 1-1.93 1.94h0a1.93 1.93 0 0 1 1.93-1.94"></svg:path>`,
})
export class ArcticonsBestbuyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
