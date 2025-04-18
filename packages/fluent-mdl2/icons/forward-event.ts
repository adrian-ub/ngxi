import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ForwardEventIcon],svg[fluent-mdl2-forward-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 128h384v1297l-128-128V640H128v1152h1291l128 128H0V128h384V0h128v128h1024V0h128zM128 512h1792V256h-256v128h-128V256H512v128H384V256H128zm1507 861l90-90l317 317l-317 317l-90-90l163-163h-518v-128h518z"></svg:path>`,
})
export class FluentMdl2ForwardEventIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
