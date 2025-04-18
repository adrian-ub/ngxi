import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PublicCalendarIcon],svg[fluent-mdl2-public-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1729 1283l317 317l-317 317l-91-90l163-163h-658l163 163l-91 90l-317-317l317-317l91 90l-163 163h658l-163-163zM256 640v896h512v128H128V128h256V0h128v128h896V0h128v128h256v1024h-128V640zm128-384H256v256h1408V256h-128v128h-128V256H512v128H384z"></svg:path>`,
})
export class FluentMdl2PublicCalendarIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
