import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDroideditIcon],svg[arcticons-droidedit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.895 39.45h20.21"></svg:path><svg:rect width="39" height="25.354" x="4.5" y="8.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 14.939h26M11 19.13h11.305m3.39 0H37m-26 4.192h5.746m3.203 0H37m0 4.192h-5.746m-3.203 0H11m17.333 6.389v5.547m-8.666-5.547v5.547"></svg:path>`,
})
export class ArcticonsDroideditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
