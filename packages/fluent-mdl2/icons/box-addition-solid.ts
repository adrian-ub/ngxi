import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BoxAdditionSolidIcon],svg[fluent-mdl2-box-addition-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 0v1920H0V0zm-384 896h-512V384H896v512H384v128h512v512h128v-512h512z"></svg:path>`,
})
export class FluentMdl2BoxAdditionSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
