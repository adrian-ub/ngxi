import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProtonPassIcon],svg[arcticons-proton-pass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31.242" height="31.242" x="8.379" y="8.379" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4" transform="rotate(45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.624 39.716L4.736 26.828a4 4 0 0 1 0-5.657L17.624 8.283a3 3 0 0 1 4.243 0l13.595 13.595a3 3 0 0 1 0 4.243L21.867 39.716a3 3 0 0 1-4.243 0"></svg:path>`,
})
export class ArcticonsProtonPassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
