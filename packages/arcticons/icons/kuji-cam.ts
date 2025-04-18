import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKujiCamIcon],svg[arcticons-kuji-cam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 20v8m-4-8v6c0 1.1-.9 2-2 2h0c-1.1 0-2-.9-2-2v-.7M20 20v5.3c0 1.5 1.2 2.7 2.6 2.7s2.6-1.2 2.6-2.7V20M12 20v8m0-2.8l4.2-5.2m0 8L13 24M5.5 11.9h37m-37 24.2h37"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKujiCamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
