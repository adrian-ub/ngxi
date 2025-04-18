import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PackagesIcon],svg[fluent-mdl2-packages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1024h-128v1024H640V1024H512V640h768V384H256v896h384v128H128V384H0V0h1536v384h-128v256h640zM128 256h1280V128H128zm1664 768H768v896h1024zm128-256H640v128h1280zm-512 768H896v-128h512zm-512 256v-128h384v128z"></svg:path>`,
})
export class FluentMdl2PackagesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
