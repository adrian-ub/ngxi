import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBeverageIcon],svg[zondicons-beverage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18v-7L0 2V0h20v2l-9 9v7l5 1v1H4v-1zm2-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class ZondiconsBeverageIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
