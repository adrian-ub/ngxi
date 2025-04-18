import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SetActionIcon],svg[fluent-mdl2-set-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 0v128H0V0zm-649 512l-67 128H0V512zM0 1024h747l-67 128H0zm1512 0h568L1004 2048H747l304-640H691l535-1024h612zm-559 896l807-768h-456l325-640h-325l-402 768h351l-304 640z"></svg:path>`,
})
export class FluentMdl2SetActionIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
