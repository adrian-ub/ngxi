import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKnockedOutFaceIcon],svg[fluent-emoji-flat-knocked-out-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#402A32" d="M7.293 9.293a1 1 0 0 1 1.414 0l1.793 1.793l1.793-1.793a1 1 0 1 1 1.414 1.414L11.914 12.5l1.793 1.793a1 1 0 0 1-1.414 1.414L10.5 13.914l-1.793 1.793a1 1 0 0 1-1.414-1.414L9.086 12.5l-1.793-1.793a1 1 0 0 1 0-1.414m16 0a1 1 0 1 1 1.414 1.414L22.914 12.5l1.793 1.793a1 1 0 0 1-1.414 1.414L21.5 13.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793l-1.793-1.793a1 1 0 0 1 1.414-1.414l1.793 1.793z"></svg:path><svg:path fill="#BB1D80" d="M12 23a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKnockedOutFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
