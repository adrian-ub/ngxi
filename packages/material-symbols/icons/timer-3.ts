import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTimer3Icon],svg[material-symbols-timer-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19v-3h6v-2.5H9v-3h5V8H8V5h6q1.25 0 2.125.875T17 8v1.9q0 .875-.612 1.488T14.9 12q.875 0 1.488.613T17 14.1V16q0 1.25-.875 2.125T14 19z"></svg:path>`,
})
export class MaterialSymbolsTimer3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
