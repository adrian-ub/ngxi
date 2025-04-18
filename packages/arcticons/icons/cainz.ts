import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCainzIcon],svg[arcticons-cainz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.442v5.797m2.262 0v-5.797l3.964 5.797v-5.797m2.262 0h3.964l-3.964 5.797h3.964m-20.94-1.944v.024c0 1.06-.887 1.92-1.982 1.92s-1.982-.86-1.982-1.92v-1.957c0-1.06.888-1.92 1.982-1.92s1.982.86 1.982 1.92v.024m2.262 3.853l1.982-5.797l1.982 5.797M8.797 28.558c7.63-.887 19.731-.98 28.291-.216"></svg:path>`,
})
export class ArcticonsCainzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
