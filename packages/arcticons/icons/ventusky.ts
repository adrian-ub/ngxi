import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVentuskyIcon],svg[arcticons-ventusky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.286 33.278h17.85m-23.636 0h3.883M4.5 18.433h19.745m8.69 0h7.774M16.472 29.566h14.956m-20.842 0h3.882m11.78-3.71h7.774m-17.55 0h7.773m-13.66-3.712h3.883m14.774 0h7.773m-20.543 0h7.773m11.481-7.422H43.5m-27.028 0h7.773"></svg:path>`,
})
export class ArcticonsVentuskyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
