import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFastUpButtonIcon],svg[twemoji-fast-up-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M18 6L7 18h9.166L7 28h22l-9.167-10H29z"></svg:path>`,
})
export class TwemojiFastUpButtonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
