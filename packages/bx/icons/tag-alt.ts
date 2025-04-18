import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTagAltIcon],svg[bx-tag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.868 4.504A1 1 0 0 0 17 4H3a1 1 0 0 0-.868 1.496L5.849 12l-3.717 6.504A1 1 0 0 0 3 20h14a1 1 0 0 0 .868-.504l4-7a1 1 0 0 0 0-.992zM16.42 18H4.724l3.145-5.504a1 1 0 0 0 0-.992L4.724 6H16.42l3.429 6z"></svg:path>`,
})
export class BxTagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
