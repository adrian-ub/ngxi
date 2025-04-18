import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogoTwitchIcon],svg[ion-logo-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m80 32l-32 80v304h96v64h64l64-64h80l112-112V32Zm336 256l-64 64h-96l-64 64v-64h-80V80h304Z"></svg:path><svg:path fill="currentColor" d="M320 143h48v129h-48zm-112 0h48v129h-48z"></svg:path>`,
})
export class IonLogoTwitchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
