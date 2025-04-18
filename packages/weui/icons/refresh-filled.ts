import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiRefreshFilledIcon],svg[weui-refresh-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.546 5.132L8.828 3.414L10.243 2l3.889 3.89a.5.5 0 0 1 0 .706l-3.89 3.89L8.829 9.07l1.946-1.946a6 6 0 1 0 5.468 1.632l1.415-1.414a8 8 0 1 1-7.11-2.211z"></svg:path>`,
})
export class WeuiRefreshFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
