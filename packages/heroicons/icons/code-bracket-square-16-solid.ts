import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCodeBracketSquare16SolidIcon],svg[heroicons-code-bracket-square-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.78 1.97a.75.75 0 0 1 0 1.06L5.81 8l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m2.44 1.06a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsCodeBracketSquare16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
