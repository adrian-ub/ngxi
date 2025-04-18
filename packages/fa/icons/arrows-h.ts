import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faArrowsHIcon],svg[fa-arrows-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 640q0 26-19 45l-256 256q-19 19-45 19t-45-19t-19-45V768H384v128q0 26-19 45t-45 19t-45-19L19 685Q0 666 0 640t19-45l256-256q19-19 45-19t45 19t19 45v128h1024V384q0-26 19-45t45-19t45 19l256 256q19 19 19 45"></svg:path>`,
})
export class FaArrowsHIcon {
  readonly viewBox = input("0 0 1792 1280")
  readonly width = input("1.4em")
  readonly height = input("1em")
}
