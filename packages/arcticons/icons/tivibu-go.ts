import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTivibuGoIcon],svg[arcticons-tivibu-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.15 16.306l-2 5.4l-2-5.4m14.7 0v3.3c0 1.1.9 2 2 2s2-.9 2-2v-3.3m0 3.4v2"></svg:path><svg:circle cx="15.85" cy="13.906" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.85 16.306v5.4m-3.6-7v6c0 .6.4 1 1 1h.3m-2.4-5.4h2.2m13.4 2c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v1.3c0 1.1-.9 2-2 2h0c-1.1 0-2-.9-2-2m0 2.1v-8m1.3 20.588c-1.5 0-2.6-1.2-2.6-2.6v-2.7c0-1.5 1.2-2.7 2.6-2.7h0c1.5 0 2.7 1.2 2.7 2.7v2.6c0 1.5-1.2 2.7-2.7 2.7m-5.089-5.4c0-1.5-1.2-2.7-2.7-2.7h0c-1.5 0-2.7 1.2-2.7 2.7v2.7c0 1.5 1.2 2.6 2.7 2.6h0c1.5 0 2.7-1.2 2.7-2.6h-2.7"></svg:path><svg:circle cx="24.45" cy="13.906" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.45 16.306v5.4"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTivibuGoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
