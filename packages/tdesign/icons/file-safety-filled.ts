import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileSafetyFilledIcon],svg[tdesign-file-safety-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h10.328a5 5 0 0 1-1.83-3.866V11.5H21V6.586zM14.5 7.5V3L19 7.5z"></svg:path><svg:path fill="currentColor" d="M13.498 13.5h9v5.634a3 3 0 0 1-1.36 2.511l-3.14 2.052l-3.14-2.052a3 3 0 0 1-1.36-2.511z"></svg:path>`,
})
export class TdesignFileSafetyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
