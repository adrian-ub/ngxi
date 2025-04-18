import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFastUpButtonIcon],svg[openmoji-fast-up-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m17 41l9.111-18.795L33.78 6.388c.897-1.85 3.545-1.85 4.442 0l7.668 15.817L55 41"></svg:path><svg:path d="m17 67l9.111-18.882l7.668-15.891c.897-1.86 3.545-1.86 4.442 0l7.668 15.89L55 67"></svg:path></svg:g>`,
})
export class OpenmojiFastUpButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
