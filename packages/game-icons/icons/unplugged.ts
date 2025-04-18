import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsUnpluggedIcon],svg[game-icons-unplugged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 136c-61.174 0-111.656 45.834-119.063 105H16v30h60.938C84.344 330.166 134.825 376 196 376h15c8.31 0 15-6.69 15-15v-30h45v-30h-45v-90h45v-30h-45v-30c0-8.31-6.69-15-15-15zm210 0c-8.31 0-15 6.69-15 15v30h30v30h-30v90h30v30h-30v30c0 8.31 6.69 15 15 15h90V136z"></svg:path>`,
})
export class GameIconsUnpluggedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
