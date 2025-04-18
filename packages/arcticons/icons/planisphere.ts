import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlanisphereIcon],svg[arcticons-planisphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.883" cy="23.018" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="20.629" cy="24.642" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.056" cy="24.642" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.633" cy="31.825" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="6.25" cy="29.475" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="41.75" cy="26.875" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="40.7" cy="16.175" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.356 24.915a29 29 0 0 0 3.978.03M14.55 23.54a44 44 0 0 0 4.339.955M7.48 28.231l4.124-4.02m17.011 2.088l1.418 3.882m10.838-12.265l.707 7.209m-9.347 5.989l7.922-3.528m-.907-10.437l-9.736 6.519"></svg:path>`,
})
export class ArcticonsPlanisphereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
