import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsReignsIcon],svg[arcticons-reigns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.984 19.941V9.842M24 43.5l-9.984-6.832V19.941c2.288.875 6.855 1.04 9.984 1.04m0-.001c3.129 0 7.696-.163 9.984-1.04v16.728L24 43.5m5.054-16.604v4.77m4.93-21.806a2.51 2.51 0 1 0-3.87-2.108h0a2.51 2.51 0 0 0 1.27 2.182"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.615 9.93v3.492c2.02.389 3.92.346 5.843.395l.09-4.657c-.626-.502-1.059-1.297-1.059-2.15a2.51 2.51 0 1 1 5.02 0h0a2.75 2.75 0 0 1-1.12 2.186l.15 4.62c1.925-.048 3.823-.005 5.844-.393V9.93M14.016 19.941v-10.1m4.93 17.055v4.77"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.016 9.86a2.51 2.51 0 1 1 3.87-2.108h0a2.51 2.51 0 0 1-1.27 2.18"></svg:path>`,
})
export class ArcticonsReignsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
