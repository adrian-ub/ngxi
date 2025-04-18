import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiTownHall15Icon],svg[maki-town-hall-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7.5 0L1 3.445V4h13v-.555L7.5 0zM2 5v5l-1 1.555V13h13v-1.445L13 10V5H2zm2 1h1v5.5H4V6zm3 0h1v5.5H7V6zm3 0h1v5.5h-1V6z" fill="currentColor"></svg:path>`,
})
export class MakiTownHall15Icon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
