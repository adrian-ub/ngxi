import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextSelectJumpToBeginningIcon],svg[material-symbols-light-text-select-jump-to-beginning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.77 5.23V4H20v1.23zm0 14.77v-1.23H20V20zM15.076 5.23V4h1.23v1.23zm0 14.77v-1.23h1.23V20zM11.385 5.23V4h1.23v1.23zm-3.693 0V4h1.231v1.23zm0 14.77v-1.23h1.231V20zM4 20V4h1v16zm9.442-4.711L10.154 12l3.288-3.288l.708.688l-2.075 2.1H20v1h-7.925l2.075 2.1zM11.385 20v-1.23h1.23V20z"></svg:path>`,
})
export class MaterialSymbolsLightTextSelectJumpToBeginningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
