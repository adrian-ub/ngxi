import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAntennaBarsIcon],svg[twemoji-antenna-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M0 4c0-4 4-4 4-4h28s4 0 4 4v28s0 4-4 4H4s-4 0-4-4z"></svg:path><svg:path fill="#FFF" d="M28 8h4v20h-4zm-6 4h4v16h-4zm-6 4h4v12h-4zm-6 4h4v8h-4zm-6 4h4v4H4z"></svg:path>`,
})
export class TwemojiAntennaBarsIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
