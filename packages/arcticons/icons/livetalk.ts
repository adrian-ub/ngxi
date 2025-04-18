import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLivetalkIcon],svg[arcticons-livetalk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="24" x="5.5" y="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 18.859v10.282h5.141m2.571-10.282v10.282m9.42-10.282l-3.406 10.282l-3.406-10.282M31.359 24h3.352m1.789 5.141h-5.141V18.859H36.5"></svg:path>`,
})
export class ArcticonsLivetalkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
