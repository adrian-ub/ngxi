import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSdCardFilledIcon],svg[tdesign-sd-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H5v8.586l-2 2V23h18zM11 8H9V5h2zm3 0h-2V5h2zm1 0V5h2v3z"></svg:path>`,
})
export class TdesignSdCardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
