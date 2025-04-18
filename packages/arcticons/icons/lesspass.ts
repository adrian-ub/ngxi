import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLesspassIcon],svg[arcticons-lesspass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 3.5L44.5 24L24 44.5L3.5 24Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.998 11.753a5.28 5.28 0 0 0-1.541 10.33v13.67h5.828v-2.742h-2.742v-1.913h2.742v-2.74h-2.742v-6.275a5.281 5.281 0 0 0-1.545-10.33"></svg:path><svg:circle cx="24" cy="16.998" r="2.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLesspassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
