import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feMagicIcon],svg[fe-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3 5l2-2l16 16l-2 2zm10 0l1-2l1 2l2 1l-2 1l-1 2l-1-2l-2-1zM5 15l1-2l1 2l2 1l-2 1l-1 2l-1-2l-2-1zM4 9l1 1l-1 1l-1-1zm14 1l1 1l-1 1l-1-1z"></svg:path>`,
})
export class FeMagicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
