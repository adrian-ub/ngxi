import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TripleColumnWideIcon],svg[fluent-mdl2-triple-column-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h512v1536H0zm128 1408h256V384H128zM2048 256v1536h-512V256zm-128 128h-256v1280h256zM640 256h768v1536H640zm128 1408h512V384H768z"></svg:path>`,
})
export class FluentMdl2TripleColumnWideIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
