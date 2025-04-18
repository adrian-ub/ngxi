import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FontColorIcon],svg[fluent-mdl2-font-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1920h1408v128H256zm387-640l-170 512H338L893 128h135l554 1664h-135l-171-512zm317-949l-274 821h548z"></svg:path>`,
})
export class FluentMdl2FontColorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
