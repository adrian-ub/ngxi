import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMuaythaiIcon],svg[picon-muaythai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7V5L1 3l1-1h4V0l1 1v2H5v1h2v3L6 6V5H4v3m0-6c2-1 0-3-1-1m0 2H2l1 1"></svg:path>`,
})
export class PiconMuaythaiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
