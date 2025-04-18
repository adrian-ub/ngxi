import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageCheckedOutIcon],svg[fluent-mdl2-page-checked-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128v1792h1152v128H128V0h1115l549 549v923l-128-128V640h-512V128zm1024 91v293h293zm640 1317h128v512h-512v-128h293l-402-403l90-90l403 402z"></svg:path>`,
})
export class FluentMdl2PageCheckedOutIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
