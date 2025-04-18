import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UneditableSolid12Icon],svg[fluent-mdl2-uneditable-solid-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1908 562l-424-423q31-31 59-57t60-44t67-28t84-10q61 0 114 21t94 60t63 91t23 114q0 47-10 84t-28 70t-44 61t-58 61m-152 150l-282 282l-420-420l280-284zM25 146L146 25l1877 1877l-121 121l-729-729l-420 419L0 2046l348-759l407-411z"></svg:path>`,
})
export class FluentMdl2UneditableSolid12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
