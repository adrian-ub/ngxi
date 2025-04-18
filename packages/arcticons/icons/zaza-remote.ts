import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZazaRemoteIcon],svg[arcticons-zaza-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.404 21.28c1.013 0 1.835.806 1.835 1.8v1.832c0 .994-.822 1.8-1.835 1.8h0c-1.013 0-1.834-.806-1.834-1.8V23.08c0-.994.821-1.799 1.834-1.799m4.05.008v5.431m0-1.892l2.976-3.521m0 5.413l-2.277-2.715"></svg:path><svg:circle cx="8" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="40" r=".75" fill="currentColor"></svg:circle><svg:circle cx="40" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="8" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsZazaRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
