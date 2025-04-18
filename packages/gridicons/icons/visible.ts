import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsVisibleIcon],svg[gridicons-visible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C5.188 6 1 12 1 12s4.188 6 11 6s11-6 11-6s-4.188-6-11-6m0 10c-3.943 0-6.926-2.484-8.379-4c1.04-1.085 2.862-2.657 5.254-3.469A3.96 3.96 0 0 0 8 11a4 4 0 0 0 8 0a3.96 3.96 0 0 0-.875-2.469c2.393.812 4.216 2.385 5.254 3.469c-1.455 1.518-4.437 4-8.379 4"></svg:path>`,
})
export class GridiconsVisibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
