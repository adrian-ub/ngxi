import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPaintRollerIcon],svg[la-paint-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v8h18V4zm2 2h14v4H7zm17 1v2h1v4.25l-9.281 2.781l-.719.219V19h-2v9h6v-9h-2v-1.25l9.281-2.781l.719-.219V7zm-9 14h2v5h-2z"></svg:path>`,
})
export class LaPaintRollerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
