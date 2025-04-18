import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsM64plusFzIcon],svg[arcticons-m64plus-fz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.08 26.53L7.591 16.266L24.08 6.002l16.489 10.264z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.569 16.266V32.74L24.08 43.002L7.591 32.74V16.266"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.862 28.855l4.58-3.016l-3.672 8.53l4.643-3.12M24.08 43.002V26.53"></svg:path>`,
})
export class ArcticonsM64plusFzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
