import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsComicoJustoonIcon],svg[arcticons-comico-justoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.916 11.647q-1.221-4.916-6.138-4.916l-22.12-1.232q-3.684 0-3.685 3.684L5.931 34.988q-.41 7.37 6.959 4.917l8.602-2.464q2.041-.81 3.684 0l9.834 4.916c1.22.622 2.453-.92 1.531-2.452l-2.519-4.673c-.488-.977-.244-1.72 1.387-2.286l3.286-.822q3.683-.821 3.374-3.274z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.263 17.421a7.371 7.371 0 1 0-.033 7.836"></svg:path>`,
})
export class ArcticonsComicoJustoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
