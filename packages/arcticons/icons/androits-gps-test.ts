import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAndroitsGpsTestIcon],svg[arcticons-androits-gps-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="14.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="33.855" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.056" cy="16.717" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.804" cy="13.822" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.065" cy="7.472" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.023" cy="7.472" r=".75" fill="currentColor"></svg:circle><svg:circle cx="38.25" cy="14.159" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsAndroitsGpsTestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
