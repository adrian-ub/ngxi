import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadLeftIcon],svg[mdi-gamepad-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v5.5l3 3l3-3V2zM2 9v6h5.5l3-3l-3-3zm14.5 0l-3 3l3 3H22V9zM4 11h2v2H4zm8 2.5l-3 3V22h6v-5.5z"></svg:path>`,
})
export class MdiGamepadLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
