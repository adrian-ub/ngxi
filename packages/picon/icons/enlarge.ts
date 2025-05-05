import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEnlargeIcon],svg[picon-enlarge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v1H2v2H1V1m5 3v2H4v1h3V4"></svg:path>`,
})
export class PiconEnlargeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
