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
  template: `<svg:path fill="currentColor" d="M13 1H3v22h10.328a5 5 0 0 1-1.83-3.866V11.5H21V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm1.498 6.5h-9v5.634a3 3 0 0 0 1.36 2.511l3.14 2.052l3.14-2.052a3 3 0 0 0 1.36-2.511z"></svg:path>`,
})
export class TdesignFileSafetyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
