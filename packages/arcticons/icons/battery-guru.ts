import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBatteryGuruIcon],svg[arcticons-battery-guru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.471a19.493 19.493 0 0 0 0 36.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.513 14.16A16.52 16.52 0 0 0 24 42.413M37.488 14.16A16.52 16.52 0 0 1 24 42.413"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.002 20.732c2.1 1.587 5.462 3.557 10.138-.539s8.711-4.35 15.253-2.02m-14.055 15.03l4.521-5.513h-4.367l4.521-5.513"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.412a19.493 19.493 0 0 0 0-36.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.56 14.072a16.5 16.5 0 0 1 2.928.089m-24.048-.089a16.5 16.5 0 0 0-2.928.089"></svg:path>`,
})
export class ArcticonsBatteryGuruIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
