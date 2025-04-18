import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CityNextIcon],svg[fluent-mdl2-city-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1280 37l640 640v1371h-128V731l-384-384v421h128v1280h-384v-384h-128v384H640V768h384V640H256v1408H128V512h1024v256h128zm128 1883V896H768v1024h128v-384h384v384zM384 896V768h128v128zm0 256v-128h128v128zm0 256v-128h128v128zm0 256v-128h128v128zm0 256v-128h128v128zm896-896v128h-128v-128zm0 256v128h-128v-128zm-256-256v128H896v-128zm0 256v128H896v-128z"></svg:path>`,
})
export class FluentMdl2CityNextIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
