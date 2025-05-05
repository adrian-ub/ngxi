import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWindowIcon],svg[picon-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h8v8H0m3.5-1h1V1h-1M1 7h6V1H1m0 2.5v1h6v-1"></svg:path>`,
})
export class PiconWindowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
