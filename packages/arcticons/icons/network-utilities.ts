import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetworkUtilitiesIcon],svg[arcticons-network-utilities-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20.663" cy="20.439" r="15.439" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.109 15.292h29.107M6.109 25.585h29.107"></svg:path><svg:ellipse cx="20.663" cy="20.439" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.433" ry="15.021"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.398 31.818a4.669 4.669 0 0 1-6.561 5.918h0l-4.099 4.75A1.757 1.757 0 0 1 29.254 40l4.75-4.098h0a4.669 4.669 0 0 1 5.917-6.561l-3.068 3.06l.416 2.069l2.068.416Z"></svg:path>`,
})
export class ArcticonsNetworkUtilitiesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
