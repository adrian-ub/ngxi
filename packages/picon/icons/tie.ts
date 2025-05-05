import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTieIcon],svg[picon-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1V0h2v1M4 8L2 6l1-4h2l1 4"></svg:path>`,
})
export class PiconTieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
