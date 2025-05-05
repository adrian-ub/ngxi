import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconClipboardIcon],svg[picon-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5v1h3V5M1 3v1h5V3M3 0L2 2h4L5 0M0 8V1h8v7"></svg:path>`,
})
export class PiconClipboardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
