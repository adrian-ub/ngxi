import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAbjadHebrewIcon],svg[mdi-abjad-hebrew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.9 4L9 10.03a3.44 3.44 0 0 0-3 2.56L4 20h2.07l1.85-6.89c.17-.65.77-1.11 1.44-1.11h1.33l6.78 8h2.63L15 13.97a3.44 3.44 0 0 0 3-2.56L20 4h-2.07l-1.85 6.89c-.17.65-.77 1.11-1.44 1.11h-1.33L6.53 4Z"></svg:path>`,
})
export class MdiAbjadHebrewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
