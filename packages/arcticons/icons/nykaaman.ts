import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNykaamanIcon],svg[arcticons-nykaaman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.585 32.754c3.67-9.069 7.967-18.138 11.962-27.207c-.17 8.919-1.116 17.837-2.09 26.755c3.268-9.267 7.666-19.151 12.93-27.802m-14.765 39l2.133-6.32l2.133 6.32m-.71-2.133h-2.845M32.58 43.5v-6.32l4.187 6.32v-6.32m-26.155 6.24v-6.24l3.16 6.32l3.16-6.32v6.32"></svg:path>`,
})
export class ArcticonsNykaamanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
