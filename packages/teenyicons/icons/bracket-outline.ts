import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBracketOutlineIcon],svg[teenyicons-bracket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 7.5h2m13 0h-2m-8 7H3.5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H5m5 14h1.5a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2H10"></svg:path>`,
})
export class TeenyiconsBracketOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
