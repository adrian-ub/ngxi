import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageAddIcon],svg[fluent-mdl2-page-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 1664h256v128h-256v256h-128v-256h-256v-128h256v-256h128zM384 128v1536h768v128H256V0h859l549 549v731h-128V640h-512V128zm768 91v293h293z"></svg:path>`,
})
export class FluentMdl2PageAddIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
