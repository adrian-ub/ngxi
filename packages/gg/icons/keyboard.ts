import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggKeyboardIcon],svg[gg-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
