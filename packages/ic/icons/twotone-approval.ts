import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneApprovalIcon],svg[ic-twotone-approval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h12v2H6zm6-12c-1.66 0-3 1.34-3 3l3 4l3-4c0-1.66-1.34-3-3-3" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2C9.24 2 7 4.24 7 7l5 7l5-7c0-2.76-2.24-5-5-5m0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3zm6 3H6c-1.1 0-2 .9-2 2v6h16v-6c0-1.1-.9-2-2-2m0 4H6v-2h12z"></svg:path>`,
})
export class IcTwotoneApprovalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
