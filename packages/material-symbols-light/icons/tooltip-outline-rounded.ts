import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTooltipOutlineRoundedIcon],svg[material-symbols-light-tooltip-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 17.5q-.667 0-1.141-.475T3 15.886V4.615q0-.666.475-1.14T4.615 3h14.77q.666 0 1.14.475T21 4.615v11.27q0 .666-.475 1.14t-1.14.475H14.29l-1.62 2.462q-.122.186-.295.28q-.172.092-.376.092t-.376-.093t-.295-.28L9.709 17.5zM12 19.189l1.754-2.689h5.63q.27 0 .443-.173t.173-.442V4.615q0-.269-.173-.442T19.385 4H4.615q-.269 0-.442.173T4 4.616v11.269q0 .269.173.442t.443.173h5.63zm0-8.939"></svg:path>`,
})
export class MaterialSymbolsLightTooltipOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
