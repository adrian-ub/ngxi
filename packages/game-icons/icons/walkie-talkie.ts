import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsWalkieTalkieIcon],svg[game-icons-walkie-talkie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71 32v135h18V32zm256 0v135h18V32zm-208 95.604V167h18v-39.396zm256 0V167h18v-39.396zM57 185v99.27l16 16V487h110V300.27l16-16V185zm256 0v99.27l16 16V487h110V300.27l16-16V185zm-96 7v80h16.432v-80zm256 0v80h16.432v-80zm-393 7h96v18H80zm256 0h96v18h-96zM80 231h96v18H80zm256 0h96v18h-96zM80 263h96v18H80zm256 0h96v18h-96zm-224 41a24 24 0 0 1 24 24a24 24 0 0 1-24 24a24 24 0 0 1-24-24a24 24 0 0 1 24-24m256 0a24 24 0 0 1 24 24a24 24 0 0 1-24 24a24 24 0 0 1-24-24a24 24 0 0 1 24-24"></svg:path>`,
})
export class GameIconsWalkieTalkieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
