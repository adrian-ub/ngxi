import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAncientColumnsIcon],svg[game-icons-ancient-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57 39v16h110V39zm32 34v318h46V73zm334 21.56l-46 23.04V391h46zM254.2 187L233 197.6V391h46V211.7zM73 409v30h78v-30zm144 0v30h78v-30zm144 0v30h78v-30zM38.49 457l-10 30H483.5l-10-30z"></svg:path>`,
})
export class GameIconsAncientColumnsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
