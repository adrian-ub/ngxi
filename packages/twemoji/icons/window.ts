import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWindowIcon],svg[twemoji-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D79E84" d="M35 36H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h34c.55 0 1 .45 1 1v34c0 .55-.45 1-1 1"></svg:path><svg:path fill="#BF6952" d="M1 36h34c.55 0 1-.45 1-1V1a1 1 0 0 0-.294-.706L.294 35.706A1 1 0 0 0 1 36"></svg:path><svg:path fill="#8CCAF7" d="M2 2h32v32H2z"></svg:path><svg:path fill="#FFF" d="M2 34V2h32z" opacity=".5"></svg:path><svg:path fill="#BF6952" d="M17 2h2v32h-2z"></svg:path><svg:path fill="#BF6952" d="M2 19v-2h32v2z"></svg:path>`,
})
export class TwemojiWindowIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
