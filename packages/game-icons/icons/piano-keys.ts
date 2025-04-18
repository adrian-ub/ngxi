import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPianoKeysIcon],svg[game-icons-piano-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 80v352h64V288H72V80zm96 0v208h-16v144h64V288h-16V80zm80 0v208h-16v144h64V288h-16V80zm80 0v208h-16v144h64V80zm64 0v352h64V288h-16V80zm96 0v208h-16v144h64V80z"></svg:path>`,
})
export class GameIconsPianoKeysIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
