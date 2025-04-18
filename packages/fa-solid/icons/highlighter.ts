import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidHighlighterIcon],svg[fa-solid-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 479.98L99.92 512l35.45-35.45l-67.04-67.04zm124.61-240.01a36.59 36.59 0 0 0-10.79 38.1l13.05 42.83l-50.93 50.94l96.23 96.23l50.86-50.86l42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64l-173.34-173.34zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13"></svg:path>`,
})
export class FaSolidHighlighterIcon {
  readonly viewBox = input("0 0 544 512")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
