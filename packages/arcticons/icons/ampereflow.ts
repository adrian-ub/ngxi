import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmpereflowIcon],svg[arcticons-ampereflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.505 8.5v-3a1 1 0 0 1 1-1h6.67a1 1 0 0 1 1 1v3m0 0h4.63a2 2 0 0 1 2 2v31a2 2 0 0 1-2 2h-17.61a2 2 0 0 1-2-2v-31a2 2 0 0 1 2-2h4.31m-.005 0h8.67"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.359 21.06l-4.268 6.316h5.817l-4.267 6.317M24 16.102v2.248m-3.484-1.406l.969 1.779m6-1.779l-.97 1.779"></svg:path>`,
})
export class ArcticonsAmpereflowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
