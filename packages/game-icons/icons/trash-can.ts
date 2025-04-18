import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTrashCanIcon],svg[game-icons-trash-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199 103v50h-78v30h270v-30h-78v-50zm18 18h78v32h-78zm-79.002 80l30.106 286h175.794l30.104-286zm62.338 13.38l.64 8.98l16 224l.643 8.976l-17.956 1.283l-.64-8.98l-16-224l-.643-8.976zm111.328 0l17.955 1.284l-.643 8.977l-16 224l-.64 8.98l-17.956-1.284l.643-8.977l16-224l.64-8.98zM247 215h18v242h-18z"></svg:path>`,
})
export class GameIconsTrashCanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
