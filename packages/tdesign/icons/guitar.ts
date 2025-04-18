import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGuitarIcon],svg[tdesign-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1.586L22.414 5L21 6.414l-1-1l-.586.586l.5.5L18.5 7.914l-.5-.5l-.828.829a5 5 0 0 1-2.183 7.346q.01.204.011.411a7 7 0 1 1-6.589-6.988a5 5 0 0 1 7.346-2.183L16.586 6l-.5-.5L17.5 4.086l.5.5l.586-.586l-1-1zM13 8a3 3 0 0 0-2.924 2.325l-.215.934l-.942-.175a5 5 0 1 0 3.997 3.997l-.175-.942l.934-.215A3.002 3.002 0 0 0 13 8m-5 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class TdesignGuitarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
