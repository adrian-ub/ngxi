import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignHorizontalRightIcon],svg[fluent-mdl2-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 0v2048h-128V0zM512 384h1152v512H512zm128 384h896V512H640zM0 1152h1664v512H0zm128 384h1408v-256H128z"></svg:path>`,
})
export class FluentMdl2AlignHorizontalRightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
