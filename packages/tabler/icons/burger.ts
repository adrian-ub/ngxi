import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBurgerIcon],svg[tabler-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4m8-11c3.783 0 6.953 2.133 7.786 5H4.214C5.047 6.133 8.217 4 12 4m-7 8h14"></svg:path>`,
})
export class TablerBurgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
