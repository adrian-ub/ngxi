import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phClubThinIcon],svg[ph-club-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 92a53 53 0 0 0-8.26.65a52 52 0 1 0-95.48 0A53 53 0 0 0 72 92a52 52 0 1 0 31.38 93.48l-11.21 37.37A4 4 0 0 0 96 228h64a4 4 0 0 0 3.83-5.15l-11.21-37.37A52 52 0 1 0 184 92m0 96a43.92 43.92 0 0 1-36.73-19.77a4 4 0 0 0-7.17 3.36L154.62 220h-53.24l14.52-48.41a4 4 0 0 0-7.17-3.36a44 44 0 1 1-21.91-65.67a4 4 0 0 0 4.66-6a44 44 0 1 1 73 0a4 4 0 0 0 4.66 6A44 44 0 1 1 184 188"></svg:path>`,
})
export class PhClubThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
