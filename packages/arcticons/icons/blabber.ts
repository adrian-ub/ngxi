import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlabberIcon],svg[arcticons-blabber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m24 42.5l-5.9-5.9h-6.3c-3.5 0-6.3-2.6-6.3-5.9V11.4c0-3.3 2.6-5.9 5.9-5.9h25.2c3.2 0 5.9 2.6 5.9 5.9q0 0 0 0v19.3c0 3.3-2.6 5.9-5.9 5.9h-6.7z"></svg:path><svg:path d="M24 17.7c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9m-8.4 0c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9s-1.3-2.9-2.9-2.9m16.8 0c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9"></svg:path></svg:g>`,
})
export class ArcticonsBlabberIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
