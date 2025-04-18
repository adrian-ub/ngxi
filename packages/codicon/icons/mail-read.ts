import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMailReadIcon],svg[codicon-mail-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 1.57h-.51L1 5.56v7.94l.5.5h13l.5-.5V5.56zM8 2.58l5.63 3.32l-1.37 1.59H3.74L2.43 5.9zM14 13H2V6.92L3.11 8.3l.39.19h9l.39-.19L14 6.92z"></svg:path>`,
})
export class CodiconMailReadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
