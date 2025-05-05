import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAttachmentIcon],svg[picon-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v4h1V2h1v4H3V0h5v8H1V2h1v5h5V1"></svg:path>`,
})
export class PiconAttachmentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
