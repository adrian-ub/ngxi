import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChessKnightIcon],svg[mdi-chess-knight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5v-2h14zM13 2c-1.25 0-2.42.62-3.11 1.66L7 8l2 2l2.06-1.37c.44-.31 1.08-.19 1.39.27c.02.03.05.06.05.1c.3.59.19 1.3-.28 1.77l-4.8 4.8c-.55.56-.55 1.46.01 2.01c.26.26.62.42.99.42H17V6a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiChessKnightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
