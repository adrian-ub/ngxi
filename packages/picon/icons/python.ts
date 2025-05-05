import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPythonIcon],svg[picon-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l1 1v2H4v1h2L5 7H3V4h4M2 1l1-1h3v3H2v3L1 5V2h4V1"></svg:path>`,
})
export class PiconPythonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
