import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrayMinusIcon],svg[mdi-tray-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10H8V8h8M2 17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-2v5H4v-5H2Z"></svg:path>`,
})
export class MdiTrayMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
