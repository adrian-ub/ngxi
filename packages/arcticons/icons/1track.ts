import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1trackIcon],svg[arcticons-1track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.221 26.715l5.21-2.865v19.211"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.304 34.249L24 44.5L5.696 34.249V13.751L24 3.5l18.304 10.251z"></svg:path>`,
})
export class Arcticons1trackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
