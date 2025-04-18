import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTranslatiumIcon],svg[arcticons-translatium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14.25 36.626c3.608 0 7.02.585 9.75 1.56V11.374c-2.828-.975-6.142-1.56-9.75-1.56s-7.02.585-9.75 1.56v26.715c2.73-.975 6.045-1.462 9.75-1.462z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 38.186c2.828-.975 6.142-1.56 9.75-1.56s7.02.585 9.75 1.56V11.374c-2.828-.975-6.142-1.56-9.75-1.56s-7.02.585-9.75 1.56m-5.265 19.5l-4.387-13.748l-4.68 13.748m1.56-4.68h5.948"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.542 24.846h8.314c.517 0 .761.383.486.82c-1.067 1.7-3.039 3.547-5.423 4.601m-1.893-8.454h5.937m-9.594.506c2.508-1.141 4.553-3.007 5.836-4.445c.333-.373.496-.513.778-.513s.573.281.778.513c1.395 1.575 3.232 3.283 5.836 4.445"></svg:path>`,
})
export class ArcticonsTranslatiumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
