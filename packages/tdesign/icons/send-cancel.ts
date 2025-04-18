import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSendCancelIcon],svg[tdesign-send-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.292 1.665L24.002 12l-5.456 2.379l-.8-1.833L18.999 12L3.708 5.336l2 5.664H11v2H5.708l-2 5.665l8.56-3.731l.799 1.833L.292 22.336L3.94 12zm22.79 14.33l-2.832 2.851l2.821 2.822l-1.414 1.414l-2.819-2.82l-2.818 2.819l-1.414-1.415l2.818-2.817l-2.838-2.838L16 14.597l2.836 2.835l2.827-2.846z"></svg:path>`,
})
export class TdesignSendCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
