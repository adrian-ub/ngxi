import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBostonTransitIcon],svg[arcticons-boston-transit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M5.5 24.085h6.139m30.861 0h-6.139M6.449 33.038h10.957m24.145 0H30.594M6.449 15.19h6.469m28.633 0h-6.469"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 8.736c-6.859 0-12.419 5.56-12.419 12.419c0 4.962 1.962 7.611 3.823 9.6c3.044 3.253 6.909 7.23 8.122 8.246c.151.175.312.263.474.263s.323-.088.474-.263c1.213-1.016 5.078-4.993 8.122-8.246c1.86-1.989 3.823-4.638 3.823-9.6c0-6.859-5.56-12.419-12.419-12.419"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M17.596 18.129H29.93m-6.167 0v12.333"></svg:path>`,
})
export class ArcticonsBostonTransitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
