import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsScriptPrescriptionIcon],svg[majesticons-script-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M6 3c1 0 3 .6 3 3S7 9 6 9h12M6 3h12c1 0 3 .6 3 3s-2 3-3 3M6 3c-1 0-3 .6-3 3v13.002C3 20.106 3.895 21 5 21h5.5M18 9v1M7 13h3m-3 4h3m4 2v-3m2 0h1.5a1.5 1.5 0 0 0 1.5-1.5v0a1.5 1.5 0 0 0-1.5-1.5H14v3m2 0l3 3m-3-3h-2m7 5l-2-2m0 0l2-2m-2 2l-2 2"></svg:path><svg:path fill="currentColor" d="M9 6c0 2.4-2 3-3 3h12c1 0 3-.6 3-3s-2-3-3-3H6c1 0 3 .6 3 3z"></svg:path></svg:g>`,
})
export class MajesticonsScriptPrescriptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
