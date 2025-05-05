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
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zM10.004 3v2.004h-2V7h2v2.004h-2V11h2v2.004h-2v2H6V13h2v-1.996H6V9h2V7.004H6V5h2V3z"></svg:path>`,
})
export class TdesignFileZipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
