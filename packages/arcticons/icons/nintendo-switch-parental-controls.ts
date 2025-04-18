import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNintendoSwitchParentalControlsIcon],svg[arcticons-nintendo-switch-parental-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.195 24.476h5.403v-6.659H6.402v6.659h10.217v17.122h12.679m2.54-12.804v-.105"></svg:path><svg:circle cx="24" cy="11.159" r="6.659" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.838 28.794v-.105"></svg:path><svg:circle cx="24" cy="11.159" r="6.659" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 36.842v4.756m-.225-12.805v3.585h5.528V43.5h6.973V32.378h5.322v-3.585z"></svg:path><svg:circle cx="32.686" cy="25.207" r="3.585" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.686 38.963V43.5"></svg:path>`,
})
export class ArcticonsNintendoSwitchParentalControlsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
