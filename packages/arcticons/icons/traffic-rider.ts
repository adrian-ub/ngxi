import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrafficRiderIcon],svg[arcticons-traffic-rider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="38.618" cy="29.507" r="4.882" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.618" cy="29.507" r="1.797" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.382" cy="29.507" r="4.882" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.382" cy="29.507" r="1.797" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.809 28.422l5.542-6.219m21.641 5.623l-5.975-14.215h-3.398M7.586 21.383l12.841 6.443m3.251-1.756L8.582 18.102l3.594-.937l8.994 2.152"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.909 19.089s1.21.576 1.913 2.06h5.39l-1.123-4.033h-6.932c-1.738 0-3.184 1.621-3.32 3.602h5.753m.34 6.924l5.282-6.493m-1.318 4.491c.098-1.65 3.535-7.167 9.686-4.667"></svg:path><svg:ellipse cx="23.678" cy="27.826" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.252" ry="1.756"></svg:ellipse>`,
})
export class ArcticonsTrafficRiderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
