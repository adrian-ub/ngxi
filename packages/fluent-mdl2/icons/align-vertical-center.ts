import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignVerticalCenterIcon],svg[fluent-mdl2-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1024h-384v512h-512v-512H896v768H384v-768H0V896h384V128h512v768h256V384h512v512h384zM768 256H512v1408h256zm768 256h-256v896h256z"></svg:path>`,
})
export class FluentMdl2AlignVerticalCenterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
