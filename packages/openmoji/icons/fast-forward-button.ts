import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFastForwardButtonIcon],svg[openmoji-fast-forward-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m31 17l18.795 9.111l15.817 7.668c1.85.897 1.85 3.545 0 4.442L49.795 45.89L31 55"></svg:path><svg:path d="m5 17l18.882 9.111l15.891 7.668c1.86.897 1.86 3.545 0 4.442l-15.89 7.668L5 55"></svg:path></svg:g>`,
})
export class OpenmojiFastForwardButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
