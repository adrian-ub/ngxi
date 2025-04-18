import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProshotIcon],svg[arcticons-proshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.561" cy="8.176" r="1.439" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="24.231" cy="21.835" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="17.511" ry="17.335"></svg:ellipse><svg:circle cx="41.682" cy="34.531" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.948" cy="38.589" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.682" cy="40.257" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.044" cy="41.601" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.206" cy="42.647" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.969" cy="43.319" r=".75" fill="currentColor"></svg:circle><svg:circle cx="39.915" cy="36.647" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.631 15.061v13.547m5.733-13.547v13.547m5.733-13.547v13.547m5.733-13.547v13.547"></svg:path>`,
})
export class ArcticonsProshotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
