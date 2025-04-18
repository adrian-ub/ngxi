import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungSmartSwitchIcon],svg[arcticons-samsung-smart-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.035 23.802c-4.443-.91-7.785-4.84-7.785-9.552c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v3m-7.785 6.948c4.443.91 7.785 4.84 7.785 9.552c0 5.385-4.365 9.75-9.75 9.75s-9.75-4.365-9.75-9.75v-3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.078 33.578L14.25 30.75l-2.828 2.828m19.5-19.156l2.828 2.828l2.828-2.828"></svg:path>`,
})
export class ArcticonsSamsungSmartSwitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
