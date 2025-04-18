import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsInvertedDice4Icon],svg[game-icons-inverted-dice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M175.91 128.5a47.37 47.37 0 1 1-47.41-47.32a47.37 47.37 0 0 1 47.41 47.32M382.5 81.18a47.37 47.37 0 1 0 47.32 47.32a47.37 47.37 0 0 0-47.32-47.32m-254 253.91a47.37 47.37 0 1 0 47.41 47.41a47.37 47.37 0 0 0-47.41-47.41m253.91 0a47.37 47.37 0 1 0 47.41 47.41a47.37 47.37 0 0 0-47.32-47.41zm102 92.93a56.48 56.48 0 0 1-56.39 56.48h-344a56.48 56.48 0 0 1-56.52-56.48v-344A56.48 56.48 0 0 1 83.98 27.5h344a56.48 56.48 0 0 1 56.52 56.48zm-20-344a36.48 36.48 0 0 0-36.39-36.52h-344A36.48 36.48 0 0 0 47.5 83.98v344a36.48 36.48 0 0 0 36.48 36.52h344a36.48 36.48 0 0 0 36.52-36.48z"></svg:path>`,
})
export class GameIconsInvertedDice4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
