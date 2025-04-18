import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsTextBoxIcon],svg[zondicons-text-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h6v6H0zm2 2v2h2V2zm12-2h6v6h-6zm2 2v2h2V2zm-2 12h6v6h-6zm2 2v2h2v-2zM0 14h6v6H0zm2 2v2h2v-2zM6 2h8v2H6zm0 14h8v2H6zM16 6h2v8h-2zM2 6h2v8H2zm5 1h6v2H7zm2 2h2v4H9z"></svg:path>`,
})
export class ZondiconsTextBoxIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
