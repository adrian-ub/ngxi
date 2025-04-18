import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBroadcastThinIcon],svg[ph-broadcast-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m76-28a75.74 75.74 0 0 1-19.35 50.67a4 4 0 0 1-6-5.34a67.92 67.92 0 0 0 0-90.66a4 4 0 0 1 6-5.34A75.74 75.74 0 0 1 204 128M65.34 101.53a67.92 67.92 0 0 0 12 71.8a4 4 0 0 1-6 5.34a75.93 75.93 0 0 1 0-101.34a4 4 0 1 1 6 5.34a68 68 0 0 0-12 18.86M244 128a115.68 115.68 0 0 1-33.14 81.18a4 4 0 0 1-5.72-5.6a107.89 107.89 0 0 0 0-151.16a4 4 0 0 1 5.72-5.6A115.68 115.68 0 0 1 244 128M50.86 203.58a4 4 0 0 1-5.72 5.6a115.91 115.91 0 0 1 0-162.36a4 4 0 1 1 5.72 5.6a107.89 107.89 0 0 0 0 151.16"></svg:path>`,
})
export class PhBroadcastThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
