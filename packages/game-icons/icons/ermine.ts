import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsErmineIcon],svg[game-icons-ermine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 24l-32 64l32 48l32-48zm-64 96l-64 32l64 32l48-32zm128 0l-48 32l48 32l64-32zm-64 32c-32 128-64 192-128 256c16 0 48 0 64-16c0 16-16 48-32 64c16 0 48 0 64-16c16 16 16 16 32 48c16-32 16-32 32-48c16.847 12.064 48 16 64 16c-16-16-32-48-32-64c16 16 48 16 64 16c-64-64-96-128-128-256"></svg:path>`,
})
export class GameIconsErmineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
