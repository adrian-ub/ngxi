import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconQuietIcon],svg[picon-quiet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6q2-2 0-4M0 5V3h2l2-2v6L2 5"></svg:path>`,
})
export class PiconQuietIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
