import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsContractIcon],svg[game-icons-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 64L64 96l48 48l-48 48h128V64l-48 48zm224 0v128h128l-48-48l48-48l-32-32l-48 48zM64 320l48 48l-48 48l32 32l48-48l48 48V320zm256 0v128l48-48l48 48l32-32l-48-48l48-48z"></svg:path>`,
})
export class GameIconsContractIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
