import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUniversalcopyIcon],svg[arcticons-universalcopy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.375 19.788h19.656m-19.656 5.989h11.832m2.608 3.189h2.67a2.67 2.67 0 0 1 2.67 2.67v0a2.67 2.67 0 0 1-2.67 2.67h0a2.67 2.67 0 0 1-2.67-2.67zm-16.951-6.294v2.67a2.67 2.67 0 0 1-2.67 2.67h0a2.67 2.67 0 0 1-2.67-2.67h0a2.67 2.67 0 0 1 2.67-2.67z"></svg:path>`,
})
export class ArcticonsUniversalcopyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
