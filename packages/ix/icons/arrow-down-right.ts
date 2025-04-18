import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowDownRightIcon],svg[ix-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 298.667l-128 128l-30.293-30.294L344.96 320H106.667V64h42.667v213.333H344.96l-76.586-76.373l30.293-30.293z"></svg:path>`,
})
export class IxArrowDownRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
