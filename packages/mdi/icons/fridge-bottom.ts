import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeBottomIcon],svg[mdi-fridge-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 4h2v2H8zm-1 5h10v8H7zm1 1v3h2v-3z"></svg:path>`,
})
export class MdiFridgeBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
