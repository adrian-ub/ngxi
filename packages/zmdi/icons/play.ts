import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPlayIcon],svg[zmdi-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 43l235 149L0 341z"></svg:path>`,
})
export class ZmdiPlayIcon {
  readonly viewBox = input("0 0 240 384")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
