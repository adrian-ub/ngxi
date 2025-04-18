import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsGreekTempleIcon],svg[game-icons-greek-temple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 26.2L52 135h408zM73 153v14h366v-14zm16 32v206h30V185zm101.334 0v206h30V185zm101.332 0v206h30V185zM393 185v206h30V185zM73 409v30h366v-30zm-32 48v30h430v-30z"></svg:path>`,
})
export class GameIconsGreekTempleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
