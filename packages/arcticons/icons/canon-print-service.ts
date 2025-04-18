import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCanonPrintServiceIcon],svg[arcticons-canon-print-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 18.782h37v21.74h-37zM38.18 7.478H9.82L5.5 18.782h37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.418 11.48h-8.836l-.982 3.3h10.8zM11.292 24.287l25.172-.057l2.683 13.527H8.853zm3.337 2.731l-.09 7.61m4.851-6.504l.002 5.043m2.72 1.729l13.935.028"></svg:path><svg:ellipse cx="29.717" cy="29.401" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.138" ry="2.869"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.621 29.505l5.114-.307l1.97-2.343m-1.679 2.238l1.448 2.871m-20.527-6.606H9.5l.026-3.81H38.14l.052 3.81h-1.147"></svg:path>`,
})
export class ArcticonsCanonPrintServiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
