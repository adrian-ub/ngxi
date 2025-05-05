import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGentlemanIcon],svg[picon-gentleman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L3 1l1 1l1-1M3 8V5H2V2h4v3H5v3"></svg:path>`,
})
export class PiconGentlemanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
