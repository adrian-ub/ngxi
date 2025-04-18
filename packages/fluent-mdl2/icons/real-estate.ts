import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RealEstateIcon],svg[fluent-mdl2-real-estate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 1920h384v128h-512v-896H768v896H256V987l-83 82l-90-90l877-877l877 877l-90 90l-83-82v165h-128V859L960 282L384 859v1061h256v-896h640zm768-640v768h-128v-256h-512v-512zm-128 128h-384v256h384z"></svg:path>`,
})
export class FluentMdl2RealEstateIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
