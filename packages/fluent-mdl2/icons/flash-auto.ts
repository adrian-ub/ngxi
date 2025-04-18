import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FlashAutoIcon],svg[fluent-mdl2-flash-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1223 768h660L603 2048H313l384-768H248L888 0h719zM549 1920L1573 896h-557l384-768H967L455 1152h449l-384 768zm917-512h200l128 640h-130l-26-128h-285l-64 128h-143zm-49 384h196l-56-280z"></svg:path>`,
})
export class FluentMdl2FlashAutoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
