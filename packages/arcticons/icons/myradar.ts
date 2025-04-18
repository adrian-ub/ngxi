import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyradarIcon],svg[arcticons-myradar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="33.243" cy="24.861" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.695 24.191c0 3.59-5.532 16.644-6.5 16.65c-1.166.008-6.5-13.06-6.5-16.65a6.5 6.5 0 1 1 13 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.036 5.5c-1.961 5.317 1.515 9.074 1.151 14.528M15.65 5.5s-5.576 4.723-4.399 7.313c2.158 4.746-5.741 7.227-5.751 7.203M22.725 5.5s-2.75 5.618-1.944 8.365C23.942 24.63 5.5 27.57 5.5 27.57M30.47 5.5c-2.321 6.472.283 9.343.062 12.76m-3.734 7c.135.34-4.155 3.442-6.782 3.202c-4.964-.454-13.4 6.714-14.516 6.151m2.55 7.607c9.5-11.02 13.58-6.86 20.67-10.28"></svg:path>`,
})
export class ArcticonsMyradarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
