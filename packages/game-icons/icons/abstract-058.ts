import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAbstract058Icon],svg[game-icons-abstract-058-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21v228.569h168.172v115.56h-21.003V270.98H21V491h470V270.98H343.831v94.147h-21.003v-115.56H491V21h-35.103v145.113H347.063V21H310.49v145.113H201.656V21h-36.719v145.113H56.104V21z"></svg:path>`,
})
export class GameIconsAbstract058Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
