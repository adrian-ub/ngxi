import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEdgeScreenNote10Icon],svg[arcticons-edge-screen-note10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M20.98 30.041v-8.08a4 4 0 0 1 4.002-4.002h0a4 4 0 0 1 4.002 4.002v8.08M32.459 24h3.939m2.102 6.041h-2.039a4 4 0 0 1-4.002-4.002V21.96a4 4 0 0 1 4.002-4.002H38.5"></svg:path><svg:rect width="8.005" height="12.082" x="9.5" y="17.959" rx="4.002" ry="4.002"></svg:rect></svg:g>`,
})
export class ArcticonsEdgeScreenNote10Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
