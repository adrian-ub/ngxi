import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFalloutShelterIcon],svg[game-icons-fallout-shelter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 23C127.425 23 23 127.425 23 256s104.425 233 233 233s233-104.425 233-233S384.575 23 256 23M149.268 71.287h213.168L256 256h213.17L362.732 440.713L256 256L149.564 440.713L42.83 256H256z"></svg:path>`,
})
export class GameIconsFalloutShelterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
