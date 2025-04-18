import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHexagramIcon],svg[mdi-hexagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 7.66l6.14-.69L17 12l3.68 4.97l-6.18-.65L12.03 22L9.5 16.34l-6.14.69L7 12L3.32 7.03l6.18.65L11.97 2z"></svg:path>`,
})
export class MdiHexagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
