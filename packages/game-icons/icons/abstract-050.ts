import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAbstract050Icon],svg[game-icons-abstract-050-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21v135.125h135.125V21zm167.438 0v135.125h135.125V21zm167.437 0v135.125H491V21zM21 188.438v135.125h135.125V188.438zm167.438 0v135.125h135.125V188.438zm167.437 0v135.125H491V188.438zM21 355.875V491h135.125V355.875zm167.438 0V491h135.125V355.875zm167.437 0V491H491V355.875z"></svg:path>`,
})
export class GameIconsAbstract050Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
