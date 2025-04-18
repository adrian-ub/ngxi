import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPatientPortalIcon],svg[arcticons-patient-portal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.5 19.606C26.689 21.413 18.372 29.732 12.224 42.93"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.677 4.662a43.5 43.5 0 0 0-1.942 15.783m2.54 10.056a46.5 46.5 0 0 0 8.885 12.837M18.663 25.644A30.9 30.9 0 0 0 3.5 22.993"></svg:path>`,
})
export class ArcticonsPatientPortalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
