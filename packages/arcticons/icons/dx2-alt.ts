import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDx2AltIcon],svg[arcticons-dx2-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.687 9.5h3.087a3.395 3.395 0 0 1 3.393 3.393V23.97a3.395 3.395 0 0 1-3.393 3.393h-3.087zm0 19.503l2.817 4.024m-2.817 0l2.817-4.024m3.809 9.497h-2.649v-3.377a1.04 1.04 0 0 1 1.041-1.041h.567a1.04 1.04 0 0 0 1.04-1.041v-2.997a1.04 1.04 0 0 0-1.04-1.041h-.567a1.04 1.04 0 0 0-1.041 1.04v1.5"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDx2AltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
