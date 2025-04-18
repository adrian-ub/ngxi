import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlusMinusBoxIcon],svg[mdi-plus-minus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm6 3h2v3h3v2h-3v3h-2v-3H8V9h3zM8 16h8v2H8z"></svg:path>`,
})
export class MdiPlusMinusBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
