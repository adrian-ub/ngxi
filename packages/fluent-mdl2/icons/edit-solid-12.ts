import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EditSolid12Icon],svg[fluent-mdl2-edit-solid-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1754 0q61 0 114 21t94 60t63 91t23 114q0 47-10 84t-28 69t-44 62t-58 61l-424-423q31-31 59-57t60-44t67-28t84-10m-420 290l422 422L753 1713L0 2046l348-759z"></svg:path>`,
})
export class FluentMdl2EditSolid12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
