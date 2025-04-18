import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTwitchIcon],svg[zmdi-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 374h-83l-56 55h-55v-55H0V77L28 3h379v259zm74-130V40H65v269h83v55l56-55h102zM269 114h37v111h-37zM167 225V114h37v111z"></svg:path>`,
})
export class ZmdiTwitchIcon {
  readonly viewBox = input("0 0 408 432")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
