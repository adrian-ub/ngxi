import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCopyFilledIcon],svg[ix-copy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 384V42.667h255.999v42.666H128V384zm341.333-256h-256v341.333h256z" clip-rule="evenodd"></svg:path>`,
})
export class IxCopyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
