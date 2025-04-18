import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadOutlineIcon],svg[mdi-gamepad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 9H2v6h5.5l3-3zM6 13H4v-2h2zm9-5.5V2H9v5.5l3 3zM11 4h2v2h-2zM9 16.5V22h6v-5.5l-3-3zm4 3.5h-2v-2h2zm3.5-11l-3 3l3 3H22V9zm3.5 4h-2v-2h2z"></svg:path>`,
})
export class MdiGamepadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
