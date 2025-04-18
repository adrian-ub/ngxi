import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPauseIcon],svg[fontisto-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.801 23.999h-3.6a1.2 1.2 0 0 1-1.2-1.2v-21.6c0-.663.537-1.2 1.2-1.201h3.6a1.2 1.2 0 0 1 1.2 1.2v21.6c0 .663-.537 1.2-1.2 1.201m11.999 0h-3.6a1.2 1.2 0 0 1-1.2-1.2V1.198a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2v21.6a1.2 1.2 0 0 1-1.2 1.2z"></svg:path>`,
})
export class FontistoPauseIcon {
  readonly viewBox = input("0 0 18 24")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
