import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdaptivebrightnesstileIcon],svg[arcticons-adaptivebrightnesstile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.9 24.87H27m1.56 4.67L24 15.69l-4.66 13.85M24 6l5.54 5.54h6.92v6.92L42 24l-5.54 5.54v6.92h-6.92L24 42l-5.54-5.54h-6.92v-6.92L6 24l5.54-5.54v-6.92h6.92Z"></svg:path>`,
})
export class ArcticonsAdaptivebrightnesstileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
