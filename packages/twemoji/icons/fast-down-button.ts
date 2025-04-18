import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFastDownButtonIcon],svg[twemoji-fast-down-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="m18 30l11-12h-9.166L29 8H7l9.167 10H7z"></svg:path>`,
})
export class TwemojiFastDownButtonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
