import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSdCard1FilledIcon],svg[tdesign-sd-card-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.515 2L21 9.68V22H3V2zM7 4H5v4h2zm3.5 0h-2v4h2zM14 4h-2v4h2z"></svg:path>`,
})
export class TdesignSdCard1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
