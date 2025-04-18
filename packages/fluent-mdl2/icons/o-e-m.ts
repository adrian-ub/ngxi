import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OEMIcon],svg[fluent-mdl2-o-e-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1600 1024h192v896H128V256h896v192L1472 0l576 576zm-546-448l418 418l418-418l-418-418zm-30 128v320h320zm-768 320h640V384H256zm640 128H256v640h640zm128 0v640h640v-640z"></svg:path>`,
})
export class FluentMdl2OEMIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
