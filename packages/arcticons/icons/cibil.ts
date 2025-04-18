import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCibilIcon],svg[arcticons-cibil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.325 20v8h4m-7.013-8v8m-1.05-8h2.101m-2.101 8h2.101m-12.376-8v8m-1.05-8h2.101m-2.101 8h2.101m-4.063-2.683v.033a2.65 2.65 0 1 1-5.3 0v-2.7a2.65 2.65 0 1 1 5.3 0v.033M25.3 24a2 2 0 1 1 0 4H22v-8h3.3a2 2 0 1 1 0 4m0 0h-3.296"></svg:path>`,
})
export class ArcticonsCibilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
