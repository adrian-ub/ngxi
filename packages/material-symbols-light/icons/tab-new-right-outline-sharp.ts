import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabNewRightOutlineSharpIcon],svg[material-symbols-light-tab-new-right-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5zm-1 1V4h16v9.427q-.238-.06-.488-.09t-.512-.03V5H5v14h8.308q0 .263.03.513t.089.487zm15 2.289l-.688-.689l2.055-2.1H15.5v-1h4.867l-2.056-2.1l.689-.688L22.288 19zM11.5 16.5h1v-4h4v-1h-4v-4h-1v4h-4v1h4z"></svg:path>`,
})
export class MaterialSymbolsLightTabNewRightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
