import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMicroscopeIcon],svg[picon-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V5h4v1M4 3V0H2v3m1-1c4 0 4 5 0 5v1c5 0 5-7 0-7"></svg:path>`,
})
export class PiconMicroscopeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
