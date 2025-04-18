import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddHomeIcon],svg[fluent-mdl2-add-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1664v-640h512v768h-128v-640H896v640H256V987l-83 82l-90-90l941-942l941 942l-90 90l-83-82v293h-128V859l-640-640l-640 640v805zm1024 0h256v128h-256v256h-128v-256h-256v-128h256v-256h128z"></svg:path>`,
})
export class FluentMdl2AddHomeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
