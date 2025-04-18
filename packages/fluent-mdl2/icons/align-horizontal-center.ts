import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignHorizontalCenterIcon],svg[fluent-mdl2-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1664h-768v384H896v-384H128v-512h768V896H384V384h512V0h128v384h512v512h-512v256h768zM512 768h896V512H512zm1152 512H256v256h1408z"></svg:path>`,
})
export class FluentMdl2AlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
