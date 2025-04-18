import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSteelClawsIcon],svg[game-icons-steel-claws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.11 16.705h120.31l300.66 207.21l56.39 134l-138.88-96l-7.06-16.79zM309 423.295l-56.39-134l-238.08-164.09v94.45zm-48.47-146.43l10.79 25.64l128.76 89l-56.39-134l-329.16-226.8v76.64z"></svg:path>`,
})
export class GameIconsSteelClawsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
