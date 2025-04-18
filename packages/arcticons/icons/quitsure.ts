import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuitsureIcon],svg[arcticons-quitsure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.644 28.692l7.204 5.619c.689.537 1.655.593 2.37.089q.299-.209.64-.546c1.137-1.138 16.795-16.096 16.795-16.096s-2.362.7-3.324-2.887L18.699 29.13s-.919 1.017-2.166-.11l-3.82-3.34s.058 3.006-3.069 3.012"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.366 26.527s.197 3.128 3.215 2.778M33.4 14.797s3.296-.685 3.252 2.857M9.6 28.583s-.13-3.368 3.106-2.93"></svg:path>`,
})
export class ArcticonsQuitsureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
