import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFaceWithDiagonalMouthIcon],svg[openmoji-face-with-diagonal-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.341" cy="36.756" r="23" fill="#fcea2b"></svg:circle><svg:circle cx="36.341" cy="36.756" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path d="M30.341 31.756a3 3 0 1 1-3-3a3 3 0 0 1 3 3m18 0a3 3 0 1 1-3-3a3 3 0 0 1 3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26 48c10-5 21-4.03 21-4.03"></svg:path>`,
})
export class OpenmojiFaceWithDiagonalMouthIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
