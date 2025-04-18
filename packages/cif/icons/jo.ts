import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifJoIcon],svg[cif-jo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFF" d="M.5 50.5h300v50H.5z"></svg:path><svg:path fill="#007A3D" d="M.5 100.5h300v50H.5z"></svg:path><svg:path fill="#CE1126" d="m150.5 75.5l-150 75V.5z"></svg:path><svg:path fill="#FFF" d="m56.853 78.091l-6.392.596l.842 6.385l-4.45-4.641l-4.451 4.641l.843-6.385l-6.392-.596l5.501-3.32l-3.521-5.386l6.018 2.244l2.002-6.119l2.002 6.119l6.017-2.244l-3.52 5.386z"></svg:path></svg:g>`,
})
export class CifJoIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
