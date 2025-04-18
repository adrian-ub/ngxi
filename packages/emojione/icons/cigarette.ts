import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneCigaretteIcon],svg[emojione-cigarette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f2b200" d="M0 50h26v14H0z"></svg:path><svg:path fill="#dce5e5" d="M26 50h34v14H26z"></svg:path><svg:path fill="#ff8736" d="M60 50h4v14h-4z"></svg:path><svg:path fill="#abc2c6" d="M33.5 16C28.4 35.1 43.9 9 64 47C53.3 32.9 18.8 43.2 4.3 27.5C-15.8 5.8 41.9-15.6 33.5 16"></svg:path>`,
})
export class EmojioneCigaretteIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
