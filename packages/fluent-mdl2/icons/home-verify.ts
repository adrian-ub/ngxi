import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HomeVerifyIcon],svg[fluent-mdl2-home-verify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1280 1483l-128 128v-331H896v640H256v-805l-83 82l-90-90l941-942l941 942l-90 90l-83-82v214l-128 128V987l-640-640l-640 640v805h384v-640h512zm659-120l90 90l-557 558l-269-270l90-90l179 178z"></svg:path>`,
})
export class FluentMdl2HomeVerifyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
