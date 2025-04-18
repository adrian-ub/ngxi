import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2QuadColumnIcon],svg[fluent-mdl2-quad-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h384v1536H0zm128 1408h128V384H128zm896-1408h384v1536h-384zm128 1408h128V384h-128zM512 256h384v1536H512zm128 1408h128V384H640zM1920 256v1536h-384V256zm-128 128h-128v1280h128z"></svg:path>`,
})
export class FluentMdl2QuadColumnIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
