import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDocumentSoundIcon],svg[grommet-icons-document-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2.998 9V1H17.5L21 4.5V23h-3M16 1v5h5M1 14.01v4h3l4 3V11l-4 3.01zM11 18a2 2 0 1 0 0-4m0 8a6 6 0 1 0 0-12"></svg:path>`,
})
export class GrommetIconsDocumentSoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
