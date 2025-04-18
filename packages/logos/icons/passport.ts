import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPassportIcon],svg[logos-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D6FF00" d="M128 0C57.28 0 0 57.28 0 128h64c0-35.328 28.672-64 64-64z"></svg:path><svg:path fill="#34E27A" d="M256 128C256 57.28 198.72 0 128 0v64c35.328 0 64 28.672 64 64z"></svg:path><svg:path fill="#00B9F1" d="M128 256c70.72 0 128-57.28 128-128h-64c0 35.328-28.672 64-64 64z"></svg:path><svg:path fill="#FFF" d="M64 256V128H0v192h128v-64z"></svg:path>`,
})
export class LogosPassportIcon {
  readonly viewBox = input("0 0 256 320")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
