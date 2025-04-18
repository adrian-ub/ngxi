import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconNoNewlineIcon],svg[codicon-no-newline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.333 5.506a3 3 0 1 1 3.334 4.989a3 3 0 0 1-3.334-4.99zm2.677.777A1.986 1.986 0 0 0 2 8.009c.004.353.102.698.283 1.001zM2.99 9.717A1.986 1.986 0 0 0 6 7.991a2 2 0 0 0-.283-1.001zM14 5v1.984a.5.5 0 0 1-.5.5H9.367L11 5.851l-.707-.707l-2.121 2.121l-.423.423v.568l2.544 2.544l.707-.707l-1.61-1.609h4.11a1.5 1.5 0 0 0 1.5-1.5V5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconNoNewlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
