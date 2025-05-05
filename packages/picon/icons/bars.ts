import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBarsIcon],svg[picon-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8V0h2v8M3 8V5h2v3M0 8V3h2v5"></svg:path>`,
})
export class PiconBarsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
