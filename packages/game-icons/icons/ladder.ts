import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLadderIcon],svg[game-icons-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M121 17v30h270V17zm16 48v46h30V65zm208 0v46h30V65zm-224 64v30h270v-30zm16 48v46h30v-46zm208 0v46h30v-46zm-224 64v30h270v-30zm16 48v46h30v-46zm208 0v46h30v-46zm-224 64v30h270v-30zm16 48v46h30v-46zm208 0v46h30v-46zm-224 64v30h270v-30z"></svg:path>`,
})
export class GameIconsLadderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
