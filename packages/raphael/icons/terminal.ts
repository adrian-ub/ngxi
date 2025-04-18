import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelTerminalIcon],svg[raphael-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 6.47v19.06h25.5V6.47zm7.095 5.043l-4.33 1.926v-1l3.123-1.288v-.018L6.014 9.848v-1l4.33 1.927zM16.04 14.6h-5.05v-.88h5.05z"></svg:path>`,
})
export class RaphaelTerminalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
