import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SaveIcon],svg[fluent-mdl2-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 128q27 0 50 10t40 27t28 41t10 50v1664H357l-229-230V256q0-27 10-50t27-40t41-28t50-10zM512 896h1024V256H512zm768 512H640v384h128v-256h128v256h384zm512-1152h-128v768H384V256H256v1381l154 155h102v-512h896v512h384z"></svg:path>`,
})
export class FluentMdl2SaveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
