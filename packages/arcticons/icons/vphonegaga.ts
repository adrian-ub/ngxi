import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVphonegagaIcon],svg[arcticons-vphonegaga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.5l11.5 23l-6 12l-17.5-35z"></svg:path><svg:ellipse cx="24" cy="31.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.127" ry="1.623"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 39.5l1 2l17.5-35h-12l-6.5 13m-1 1.998L19 29.5l4 8"></svg:path>`,
})
export class ArcticonsVphonegagaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
