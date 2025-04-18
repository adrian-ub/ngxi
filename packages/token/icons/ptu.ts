import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPtuIcon],svg[token-ptu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.669 3H9.33a4.84 4.84 0 0 0-4.78 4.903V21h3.104V7.903c0-1.117.577-1.8 1.676-1.8h5.338c1.098 0 1.676.677 1.676 1.8V21h3.103V7.903A4.84 4.84 0 0 0 14.668 3"></svg:path>`,
})
export class TokenPtuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
