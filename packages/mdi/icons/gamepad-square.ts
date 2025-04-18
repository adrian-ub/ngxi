import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadSquareIcon],svg[mdi-gamepad-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-10 7H8v3H6v-3H3v-2h3V8h2v3h3m4.5 4a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m4-3a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 19.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiGamepadSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
