import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdaptivePackIcon],svg[arcticons-adaptive-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 2.98C11.24 4.74 4.74 11.24 2.98 19.5m42.04 0C43.26 11.24 36.76 4.74 28.5 2.98m0 42.04c8.26-1.76 14.76-8.26 16.52-16.52m-42.04 0c1.76 8.26 8.26 14.76 16.52 16.52"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.394 29.096a1.959 1.959 0 1 1 1.943-1.879a1.943 1.943 0 0 1-1.943 1.88m11.339-.001a1.959 1.959 0 1 1 1.943-1.879a1.943 1.943 0 0 1-1.943 1.88"></svg:path><svg:path d="M24.032 17.104c7.67 0 13.887 6.218 13.887 13.887h0c0 1.09-.884 1.975-1.975 1.975H12.056a1.975 1.975 0 0 1-1.975-1.975h0c0-7.67 6.217-13.887 13.887-13.887zm-11.976-2.07l3.949 4.634m20.035-4.634l-3.934 4.634"></svg:path></svg:g>`,
})
export class ArcticonsAdaptivePackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
