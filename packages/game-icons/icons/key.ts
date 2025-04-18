import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsKeyIcon],svg[game-icons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.878 16v243.274a120.023 120.023 0 0 0 30 236.71a119.996 119.996 0 0 0 29.998-236.242v-93.747h59.998v-44.998h-59.998v-45h89.997V16zm25.312 299.99a60 60 0 0 1 2.343 0a60 60 0 0 1 2.343 0a59.998 59.998 0 0 1 0 119.996a60.044 60.044 0 0 1-4.688-119.996z"></svg:path>`,
})
export class GameIconsKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
