import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadRightIcon],svg[mdi-gamepad-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v5.5l3 3l3-3V2zM2 9v6h5.5l3-3l-3-3zm14.5 0l-3 3l3 3H22V9zm1.5 2h2v2h-2zm-6 2.5l-3 3V22h6v-5.5z"></svg:path>`,
})
export class MdiGamepadRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
