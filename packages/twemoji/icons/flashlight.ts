import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlashlightIcon],svg[twemoji-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66757F" d="m23 17l1-1s1-1 2 0l2 2s1 1 0 2l-1 1z"></svg:path><svg:path fill="#8899A6" d="M34.879 27.879a3.01 3.01 0 0 1 0 4.242l-2.758 2.758a3.01 3.01 0 0 1-4.242 0L9.121 16.121a3.01 3.01 0 0 1 0-4.242l2.758-2.758a3.01 3.01 0 0 1 4.242 0z"></svg:path><svg:path fill="#66757F" d="M20.879 10.879a3.01 3.01 0 0 1 0 4.242l-5.758 5.758a3.01 3.01 0 0 1-4.242 0L6 16s-1-1 0-2l8-8c1-1 2 0 2 0z"></svg:path><svg:path fill="#8899A6" d="M7 17L17 7l2 2L9 19z"></svg:path><svg:path fill="#FFCC4D" d="M11.001 6a1 1 0 0 1-.896-.553l-2-4a1.001 1.001 0 0 1 1.79-.895l2 4A1 1 0 0 1 11.001 6m-6.002 6a1 1 0 0 1-.446-.106l-4-2a1 1 0 1 1 .894-1.788l4 2A1 1 0 0 1 4.999 12M8 9a1 1 0 0 1-.707-.293l-4-4a.999.999 0 1 1 1.414-1.414l4 4A.999.999 0 0 1 8 9"></svg:path>`,
})
export class TwemojiFlashlightIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
