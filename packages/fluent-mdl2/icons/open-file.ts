import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OpenFileIcon],svg[fluent-mdl2-open-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1955 1533l-163-162v677h-128v-677l-163 162l-90-90l317-317l317 317zM256 1920h1280v128H128V0h1115l549 549v475h-128V640h-512V128H256zM1280 512h293l-293-293z"></svg:path>`,
})
export class FluentMdl2OpenFileIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
