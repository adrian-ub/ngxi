import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePillIcon],svg[emojione-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffce31" d="M6.2 57.8C1 52.7.6 44.6 5.3 39.9l17.1-17.1l18.8 18.8l-17.1 17.1c-4.7 4.7-12.8 4.3-17.9-.9"></svg:path><svg:path fill="#42ade2" d="M58.3 26.8c5.3-5.3 4.9-14.3-1-20.1C51.5.9 42.5.5 37.2 5.7L24.4 18.5l-3.7 3.7l-.1.1c-.7.7-.7 1.9 0 2.6L39 43.3c.7.7 1.8.7 2.6 0l.1-.1l3.7-3.7z"></svg:path>`,
})
export class EmojionePillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
