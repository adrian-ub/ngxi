import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGuitarFilledIcon],svg[tdesign-guitar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" d="M22.414 5L21 6.414l-1-1l-.586.586l.5.5L18.5 7.914l-.5-.5l-.828.829a5 5 0 0 1-2.183 7.346q.01.204.011.411a7 7 0 1 1-6.589-6.988a5 5 0 0 1 7.346-2.183L16.586 6l-.5-.5L17.5 4.086l.5.5l.586-.586l-1-1L19 1.586zM8 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"></svg:path>`,
})
export class TdesignGuitarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
