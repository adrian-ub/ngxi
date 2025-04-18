import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadIcon],svg[mdi-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 9l-3 3l3 3H22V9M9 16.5V22h6v-5.5l-3-3M7.5 9H2v6h5.5l3-3M15 7.5V2H9v5.5l3 3z"></svg:path>`,
})
export class MdiGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
