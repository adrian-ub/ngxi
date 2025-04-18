import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLabelMultipleOutlineIcon],svg[mdi-label-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h9l-2 2H4c-.5 0-1.03-.21-1.41-.59S2 18.5 2 18V8h2zM17.63 4.84C17.27 4.33 16.67 4 16 4H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c.67 0 1.27-.34 1.63-.85L22 10zM16 14H8V6h8l3.55 4Z"></svg:path>`,
})
export class MdiLabelMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
