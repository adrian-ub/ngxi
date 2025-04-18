import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsRubelCircleIcon],svg[majesticons-rubel-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m9-6a1 1 0 0 0-1 1v3H8a1 1 0 1 0 0 2h1v1H8a1 1 0 1 0 0 2h1v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-1h3a3 3 0 1 0 0-6zm4 4h-3V8h3a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsRubelCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
