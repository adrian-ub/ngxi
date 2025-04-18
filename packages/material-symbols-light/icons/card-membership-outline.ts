import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCardMembershipOutlineIcon],svg[material-symbols-light-card-membership-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12.577v1.808q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.424v-1.807zM4.615 3h14.77q.67 0 1.143.472q.472.472.472 1.144v9.769q0 .67-.472 1.143q-.472.472-1.143.472h-4.462v4.27L12 18.807l-2.923 1.461V16H4.616q-.672 0-1.144-.472T3 14.385v-9.77q0-.67.472-1.143Q3.944 3 4.616 3M4 10.423h16V4.616q0-.231-.192-.424T19.385 4H4.615q-.23 0-.423.192T4 4.615zm0 3.962V4h.616q-.231 0-.424.192T4 4.615zq0 .23.192.423t.423.192H4z"></svg:path>`,
})
export class MaterialSymbolsLightCardMembershipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
