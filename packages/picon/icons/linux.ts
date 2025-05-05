import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLinuxIcon],svg[picon-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L3 2h2M2 7V6h4v1M3 4h2v4q3 0 1-4l2 1l-2-3c0-3-4-3-4 0L0 5l2-1Q0 8 3 8"></svg:path>`,
})
export class PiconLinuxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
