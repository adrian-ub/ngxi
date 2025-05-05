import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPcIcon],svg[picon-pc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8L7 6H1L0 8m6-4V1H2v3M1 5V0h6v5"></svg:path>`,
})
export class PiconPcIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
