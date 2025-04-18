import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAhaIcon],svg[arcticons-aha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4m11.522-23.27v12.343"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.022 26.481a3.085 3.085 0 0 1 3.086-3.085h0a3.085 3.085 0 0 1 3.085 3.085v5.091m-9.522-5.168a3.085 3.085 0 0 1-3.085 3.086h0a3.085 3.085 0 0 1-3.086-3.086V24.4a3.085 3.085 0 0 1 3.086-3.086h0A3.085 3.085 0 0 1 17.67 24.4m.001 5.09v-8.177M36.5 26.404a3.085 3.085 0 0 1-3.085 3.086h0a3.085 3.085 0 0 1-3.086-3.086V24.4a3.085 3.085 0 0 1 3.085-3.086h0A3.085 3.085 0 0 1 36.5 24.4m0 5.09v-8.177M24 19.056l2.634 2.257l3.695-4.886"></svg:path>`,
})
export class ArcticonsAhaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
