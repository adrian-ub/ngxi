import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWeVibeIcon],svg[arcticons-we-vibe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.5 19.467l-5.987 9.066l-5.987-9.066m-15.736 0l-2.823 9.066l-2.822-9.066l-2.823 9.066L4.5 19.467"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.309 12.44c9.041 0 11.775 1.488 17.59 11.56s8.55 11.56 17.59 11.56"></svg:path>`,
})
export class ArcticonsWeVibeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
