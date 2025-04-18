import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShutterstockIcon],svg[arcticons-shutterstock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.243 10.824V24h7.379V13.987c0-1.165.943-2.109 2.108-2.109h5.112V4.5h-8.274a6.324 6.324 0 0 0-6.325 6.324m29.514 26.352V24h-7.379v10.014a2.11 2.11 0 0 1-2.108 2.108h-5.112V43.5h8.274a6.324 6.324 0 0 0 6.325-6.324"></svg:path>`,
})
export class ArcticonsShutterstockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
