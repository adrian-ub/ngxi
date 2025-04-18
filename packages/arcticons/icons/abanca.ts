import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAbancaIcon],svg[arcticons-abanca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.076 28.789h12.937M43.5 38.74h-2.138a1.46 1.46 0 0 1-1.384-1L30.545 9.26L20.78 38.74m1.625-29.479L12.64 38.739m1.625-29.478L4.5 38.739"></svg:path>`,
})
export class ArcticonsAbancaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
