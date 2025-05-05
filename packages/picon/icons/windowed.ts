import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWindowedIcon],svg[picon-windowed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v1H6v2H5V5M0 6V5h3v3H2V6m0-6v2H0v1h3V0m3 0v2h2v1H5V0"></svg:path>`,
})
export class PiconWindowedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
