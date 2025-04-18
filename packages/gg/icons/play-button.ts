import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayButtonIcon],svg[gg-play-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 12.33l-6 4.33V8z"></svg:path>`,
})
export class GgPlayButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
