import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsKeyboardIcon],svg[bxs-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-8 2h2v2h-2zm0 4h2v2h-2zM9 7h2v2H9zm0 4h2v2H9zM5 7h2v2H5zm0 4h2v2H5zm12 6H7v-2h10zm2-4h-2v-2h2zm0-4h-2V7h2z"></svg:path>`,
})
export class BxsKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
