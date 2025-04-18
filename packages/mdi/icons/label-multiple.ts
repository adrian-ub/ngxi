import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLabelMultipleIcon],svg[mdi-label-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h9l-2 2H4c-.5 0-1.03-.21-1.41-.59S2 19.5 2 19V9h2zM17.63 5.84C17.27 5.33 16.67 5 16 5H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c.67 0 1.27-.34 1.63-.85L22 11z"></svg:path>`,
})
export class MdiLabelMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
