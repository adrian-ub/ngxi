import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFinishLineIcon],svg[game-icons-finish-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 24v464h18V386.9c152.3 29.4 277.6 29.4 430 0V488h18V24h-18v16h-23v32h23v32h-23v32h23v232.6c-153.3 29.9-276.7 29.9-430 0V104h23V72H41V24zm41 48h32V40H64zm32 0v32h32V72zm32 0h32V40h-32zm32 0v32h32V72zm32 0h32V40h-32zm32 0v32h32V72zm32 0h32V40h-32zm32 0v32h32V72zm32 0h32V40h-32zm32 0v32h32V72zm32 0h32V40h-32zm32 0v32h32V72zm0 32h-32v32h32zm-64 0h-32v32h32zm-64 0h-32v32h32zm-64 0h-32v32h32zm-64 0h-32v32h32zm-64 0H64v32h32z"></svg:path>`,
})
export class GameIconsFinishLineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
