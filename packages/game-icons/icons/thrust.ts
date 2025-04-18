import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsThrustIcon],svg[game-icons-thrust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M452.798 479.462L59.205 481.31s154.378-369.683 151.153-379.303l-46.12-.224l93.677-71.09l95.207 72.397l-50.263.224z"></svg:path>`,
})
export class GameIconsThrustIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
