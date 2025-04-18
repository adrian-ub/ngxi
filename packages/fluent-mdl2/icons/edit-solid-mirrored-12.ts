import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EditSolidMirrored12Icon],svg[fluent-mdl2-edit-solid-mirrored-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M294 0q-61 0-114 21T86 81t-63 91T0 286q0 47 10 84t28 69t44 62t58 61l424-423q-31-31-59-57t-60-44t-67-28t-84-10m420 290L292 712l1003 1001l753 333l-348-759z"></svg:path>`,
})
export class FluentMdl2EditSolidMirrored12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
