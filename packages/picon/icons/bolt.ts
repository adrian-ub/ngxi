import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBoltIcon],svg[picon-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6C1.5 6 1.5 2 4 2s2.5 4 0 4M2.5 0L0 2.5v3L2.5 8h3L8 5.5v-3L5.5 0"></svg:path>`,
})
export class PiconBoltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
