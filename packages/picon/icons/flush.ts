import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFlushIcon],svg[picon-flush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v2H0V6m6-3v2H2V3m6-3v2H4V0"></svg:path>`,
})
export class PiconFlushIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
