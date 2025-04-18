import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoskeyIcon],svg[arcticons-goskey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.09 26.218a1.154 1.154 0 0 1-1.63 0l-5.53-5.53a1.156 1.156 0 0 1 0-1.629l5.118-5.247c1.114-1.143 2.947-1.129 4.075 0l3.18 3.182a2.87 2.87 0 0 1 0 4.075z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.11 17.825a1.543 1.543 0 1 1 2.18 2.182a1.543 1.543 0 0 1-2.18-2.182m-5.189 3.855l-2.708 2.708l.453.703l-6.074 6.073l.18 3.093l2.495.002l.906-.905v-2.076l2.077-.002l.86-.86v-2.075h2.076l3.198-3.198"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.321 14c1.568 2.714 1.48 6.866 1.48 10s.087 7.286-1.48 10s-5.206 4.714-7.921 6.281C30.686 41.85 27.135 44 24 44s-6.686-2.151-9.4-3.719C11.886 38.714 8.245 36.714 6.679 34c-1.568-2.714-1.48-6.866-1.48-10s-.087-7.286 1.48-10s5.206-4.714 7.921-6.281C17.314 6.15 20.865 4 24 4s6.686 2.151 9.4 3.719c2.714 1.567 6.355 3.567 7.921 6.281"></svg:path>`,
})
export class ArcticonsGoskeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
