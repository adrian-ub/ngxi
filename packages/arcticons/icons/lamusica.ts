import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLamusicaIcon],svg[arcticons-lamusica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.081 22.632c-.317-7.247 7.998-3.955 11.608-11.174a32.3 32.3 0 0 1-7.979 3.666c-4.261 1.448-6.534 2.206-3.629 7.508"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.53 17.588c.334-6.205 9.654-.543 16.584-13.088c-8.69 7.738-20.789 5.428-16.583 13.088m2.55 5.044l5.628 10.118M18.53 17.588l1.754 3.394"></svg:path><svg:ellipse cx="20.179" cy="36.929" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.753" ry="6.02" transform="rotate(-32.619 20.18 36.93)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.052 37.425l-5.809-3.354v6.707z"></svg:path>`,
})
export class ArcticonsLamusicaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
