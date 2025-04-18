import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsGuatemalaIcon],svg[game-icons-guatemala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m190.8 25.24l175.1 1.08l-.1 215.08l27.3-.9l78 19.9l-97.3 76.3l-20.5 68.7l-84.7 81.4c-106.1-3.9-179.25-36.3-227.72-90l31.21-136.1l44.61-40.2l117.8-2.1c-.5-50.9-50.7-91.8-109.5-130.92l47 3.81z"></svg:path>`,
})
export class GameIconsGuatemalaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
