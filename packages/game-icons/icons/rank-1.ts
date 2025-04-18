import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsRank1Icon],svg[game-icons-rank-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255 471L91.7 387V41h328.6v346zm-147.3-93.74L255 453l149.3-75.76V57H107.7zm146.56-33.1l-94.66-48.69v50l94.54 48.62l98.27-49.89v-49.9z"></svg:path>`,
})
export class GameIconsRank1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
