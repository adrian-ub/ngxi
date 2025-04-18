import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinDrizzleOrmIcon],svg[catppuccin-drizzle-orm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.167" d="m12.001 9.002l2-4.002M8 12.002L10 8M5.998 9l2-4.001m-6.001 7.002l2-4.002"></svg:path>`,
})
export class CatppuccinDrizzleOrmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
