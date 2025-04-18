import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAudiHrIcon],svg[arcticons-audi-hr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.2 33.067v8m5.3-8v8m-5.3-4.015h5.3m2.7 4.015v-8h2.619c1.48 0 2.681 1.203 2.681 2.687s-1.2 2.686-2.681 2.686H39.2m2.627.008l2.611 2.617"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="9.567" cy="24" r="6.067"></svg:circle><svg:circle cx="19.189" cy="24" r="6.067"></svg:circle><svg:circle cx="28.811" cy="24" r="6.067"></svg:circle><svg:circle cx="38.433" cy="24" r="6.067"></svg:circle></svg:g>`,
})
export class ArcticonsAudiHrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
