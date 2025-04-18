import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorApprovalsApp32Icon],svg[fluent-color-approvals-app-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorApprovalsApp320)" d="M14.707 1.293a1 1 0 1 0-1.414 1.414l2.3 2.3C8.6 5.221 3 10.956 3 18c0 7.18 5.82 13 13 13s13-5.82 13-13v-.08c-.003-.52-.439-.92-.958-.92h-.086c-.537 0-.956.462-.956 1c0 6.075-4.925 11-11 11S5 24.075 5 18C5 12.066 9.698 7.23 15.578 7.008l-2.285 2.285a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z"></svg:path><svg:path fill="url(#fluentColorApprovalsApp321)" d="M22.707 14.707a1 1 0 0 0-1.414-1.414L16 18.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorApprovalsApp320" x1="3" x2="12.128" y1="2.765" y2="35.888" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApprovalsApp321" x1="22.656" x2="9.08" y1="13.4" y2="20.149" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#309C61"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorApprovalsApp32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
