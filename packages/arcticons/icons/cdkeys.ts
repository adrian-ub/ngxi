import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCdkeysIcon],svg[arcticons-cdkeys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.448 25.718v.043a3.474 3.474 0 0 1-3.474 3.474h0a3.474 3.474 0 0 1-3.474-3.474v-3.54a3.474 3.474 0 0 1 3.474-3.474h0a3.474 3.474 0 0 1 3.474 3.474v.043m2.688 6.971V18.747h2.36a4.59 4.59 0 0 1 4.588 4.589v1.31a4.59 4.59 0 0 1-4.588 4.59zm9.727-10.47v10.488m0-3.653l5.637-6.8m0 10.453l-4.318-5.244"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsCdkeysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
