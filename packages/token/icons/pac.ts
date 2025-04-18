import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPacIcon],svg[token-pac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.632 12L12 3l-6.63 9l5.684 7.674v-7.712l-.858 3.629l-2.723-3.586l4.533-6.097L16.533 12l-2.728 3.586L12 8.376V21z"></svg:path>`,
})
export class TokenPacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
