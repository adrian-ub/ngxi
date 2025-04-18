import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBusDoorsIcon],svg[game-icons-bus-doors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41 25v254h58.73l63.97 64H247V25zm224 0v318h83.3l64-64H471V25zM57 41h174v208H57zm224 0h174v208H281zM160 279h64v18h-64zm128 0h64v18h-64zM41 297v46h49.63l63.97 64h92.3v18h-99.7l-64.03-64H41v126h206V361h-90.7l-64.03-64zm378.7 0l-64 64H265v126h206V361h-42.2l-64 64h-99.7v-18h92.3l64-64H471v-46z"></svg:path>`,
})
export class GameIconsBusDoorsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
