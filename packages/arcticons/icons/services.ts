import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsServicesIcon],svg[arcticons-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.379" cy="9.379" r="3.879" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.379" cy="38.621" r="3.879" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.379" cy="24" r="3.879" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="25.064" height="7.758" x="17.436" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.79" ry="1.79"></svg:rect><svg:rect width="25.064" height="7.758" x="17.436" y="34.742" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.79" ry="1.79"></svg:rect><svg:rect width="25.064" height="7.758" x="17.436" y="20.121" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.79" ry="1.79"></svg:rect>`,
})
export class ArcticonsServicesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
