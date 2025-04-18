import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsServerRackIcon],svg[game-icons-server-rack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41 25v78h430V25zm254 23h18v32h-18zm121 0a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16M64 55h48v18H64zm80 0h48v18h-48zm80 0h48v18h-48zm-119 66v30h302v-30zm-64 48v78h430v-78zm254 23h18v32h-18zm121 0a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-352 7h48v18H64zm80 0h48v18h-48zm80 0h48v18h-48zm-119 66v30h302v-30zm-64 48v78h430v-78zm254 23h18v32h-18zm121 0a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-352 7h48v18H64zm80 0h48v18h-48zm80 0h48v18h-48zm13 66v30h38v-30zM25 457v30h130.2l20-30zm171.8 0l-20 30h158.4l-20-30zm140 0l20 30H487v-30z"></svg:path>`,
})
export class GameIconsServerRackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
