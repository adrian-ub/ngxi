import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GroupObjectIcon],svg[fluent-mdl2-group-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256H0V0h256zM2048 0v256h-256V0zM0 1792h256v256H0zm1792 0h256v256h-256zm-1024 0h896v128H640v-512H128V384h128v896h384V640h640V256H384V128h1024v512h512v1024h-128V768h-384v640H768zm0-512h512V768H768z"></svg:path>`,
})
export class FluentMdl2GroupObjectIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
