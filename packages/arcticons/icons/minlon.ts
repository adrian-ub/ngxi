import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinlonIcon],svg[arcticons-minlon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.56 20.542c-.974-1.262-2.29-2.277-4.35-2.252a5.711 5.711 0 0 0 0 11.42c2.56-.128 4.188-1.12 5.918-3.421l2.752-3.783c2.182-2.788 3.426-4.065 6.414-4.216a5.71 5.71 0 0 1 0 11.42c-1.915-.02-3.102-.772-4.406-2.077m19.204 2.077h-5.946V18.358h5.946h-.268a5.676 5.676 0 0 1 0 11.352z"></svg:path>`,
})
export class ArcticonsMinlonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
