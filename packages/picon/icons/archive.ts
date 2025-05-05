import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconArchiveIcon],svg[picon-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V2h6v6M3 3v1h2V3M0 1V0h8v1"></svg:path>`,
})
export class PiconArchiveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
