import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFloppyIcon],svg[picon-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3V1h1v2M3 .5V3h4V.5M1 4v3.5h6V4M0 8V0h8v8"></svg:path>`,
})
export class PiconFloppyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
