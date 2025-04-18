import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTabletIcon],svg[game-icons-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 93v326h467V93zm15.1 169.44a6.6 6.6 0 1 1 6.6-6.6a6.6 6.6 0 0 1-6.6 6.6M427.5 401h-377V109h377zm29-133.32a11.85 11.85 0 1 1 11.85-11.85a11.85 11.85 0 0 1-11.85 11.85"></svg:path>`,
})
export class GameIconsTabletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
