import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileZipFilledIcon],svg[tdesign-file-zip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h10v8h8v14H3zm7.004 2H8v2H6v2.004h2V9H6v2.004h2V13H6v2.004h2.004v-2h2V11h-2V9.004h2V7h-2V5.004h2z"></svg:path><svg:path fill="currentColor" d="M21 6.586V7h-6V1h.414z"></svg:path>`,
})
export class TdesignFileZipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
