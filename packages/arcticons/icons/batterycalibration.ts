import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBatterycalibrationIcon],svg[arcticons-batterycalibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.98 12.31h1.93v1.93h-1.93zm8.1 0h1.93v1.93h-1.93z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.95 12.31V9.25h-6.79V24H2.5m25.55-11.69V9.25h6.79V24H45.5"></svg:path><svg:rect width="13.84" height="24.96" x="17.08" y="14.24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.37 18.22l-4.98 10.35l7.82-2.2l-4.99 8.85l4.99-8.85"></svg:path>`,
})
export class ArcticonsBatterycalibrationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
