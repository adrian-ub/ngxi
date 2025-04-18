import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamRainbowIcon],svg[jam-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10h-2a8 8 0 1 0-16 0zm4 0a6 6 0 1 1 12 0h-2a4 4 0 1 0-8 0zm4 0a2 2 0 1 1 4 0z"></svg:path>`,
})
export class JamRainbowIcon {
  readonly viewBox = input("-2 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
