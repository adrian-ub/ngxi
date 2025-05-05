import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileOutlookFilledIcon],svg[tdesign-file-outlook-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 12h3v4h-3z"></svg:path><svg:path fill="currentColor" d="M15.414 1L21 6.586V23H3V1zM14.5 7.5H19L14.5 3zm-4 2.5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"></svg:path>`,
})
export class TdesignFileOutlookFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
