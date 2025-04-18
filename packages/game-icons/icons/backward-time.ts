import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBackwardTimeIcon],svg[game-icons-backward-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.242 24.629l-52.058 95.205l95.207 52.059l17.271-31.586l-42.424-23.198A143.3 143.3 0 0 1 256 114c78.638 0 142 63.362 142 142s-63.362 142-142 142s-142-63.362-142-142c0-16.46 2.785-32.247 7.896-46.928l-32.32-16.16C82.106 212.535 78 233.798 78 256c0 98.093 79.907 178 178 178s178-79.907 178-178S354.093 78 256 78c-13.103 0-25.875 1.44-38.18 4.148l22.008-40.25l-31.586-17.27zm104.27 130.379L247 253.275V368h18V258.725l62.488-93.733z"></svg:path>`,
})
export class GameIconsBackwardTimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
