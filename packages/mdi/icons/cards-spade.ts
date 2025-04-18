import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsSpadeIcon],svg[mdi-cards-spade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C9 7 4 9 4 14c0 2 2 4 4 4c1 0 2 0 3-1c0 0 .32 2-2 5h6c-2-3-2-5-2-5c1 1 2 1 3 1c2 0 4-2 4-4c0-5-5-7-8-12"></svg:path>`,
})
export class MdiCardsSpadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
