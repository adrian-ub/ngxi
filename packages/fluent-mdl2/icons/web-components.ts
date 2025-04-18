import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2WebComponentsIcon],svg[fluent-mdl2-web-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024h768v896H128V256h896zM256 384v640h640V384zm640 1408v-640H256v640zm768 0v-640h-640v640zM1280 0h768v768h-768zm640 640V128h-512v512z"></svg:path>`,
})
export class FluentMdl2WebComponentsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
