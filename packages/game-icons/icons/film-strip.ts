import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFilmStripIcon],svg[game-icons-film-strip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55 18v476h18v-37h46v37h274v-37h46v37h18V18h-18v37h-46V18h-18v60H137V18h-18v37H73V18zm18 55h46v46H73zm320 0h46v46h-46zm-256 41h238v156H137zm-64 23h46v46H73zm320 0h46v46h-46zM73 201h46v46H73zm320 0h46v46h-46zM73 265h46v46H73zm320 0h46v46h-46zm-256 41h238v156H137zm-64 23h46v46H73zm320 0h46v46h-46zM73 393h46v46H73zm320 0h46v46h-46z"></svg:path>`,
})
export class GameIconsFilmStripIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
