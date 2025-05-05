import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilePowerpointFilledIcon],svg[tdesign-file-powerpoint-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity=".9"><svg:path d="M13 13.6h-2V12h2z"></svg:path><svg:path d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zM13 10a2 2 0 0 1 2 2v1.6a2 2 0 0 1-2 2h-2V18H9v-8z"></svg:path></svg:g>`,
})
export class TdesignFilePowerpointFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
