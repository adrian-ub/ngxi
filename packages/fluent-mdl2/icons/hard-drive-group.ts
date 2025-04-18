import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HardDriveGroupIcon],svg[fluent-mdl2-hard-drive-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 1536h-128v-128h128zm-256 0h-128v-128h128zm256-512h-128V896h128zm-256 0h-128V896h128zm320-896q40 0 75 15t61 41t41 61t15 75v1472H128V320q0-40 15-75t41-61t61-41t75-15zm64 1152H256v384h1536zm0-512H256v384h1536zm0-128V320q0-26-19-45t-45-19H320q-26 0-45 19t-19 45v320zm-256-256h128v128h-128zm-256 0h128v128h-128z"></svg:path>`,
})
export class FluentMdl2HardDriveGroupIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
