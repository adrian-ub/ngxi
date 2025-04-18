import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsExpandIcon],svg[game-icons-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 64v128l48-48l48 48l32-32l-48-48l48-48zm256 0l48 48l-48 48l32 32l48-48l48 48V64zM64 320v128h128l-48-48l48-48l-32-32l-48 48zm288 0l-32 32l48 48l-48 48h128V320l-48 48z"></svg:path>`,
})
export class GameIconsExpandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
