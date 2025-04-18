import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchAccessOutlineIcon],svg[material-symbols-light-switch-access-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.692 16.308V7.692h8.616v8.616zm1-1h6.616V8.692H8.692zm-4.692 1v-1.231h1.23v1.23zm0-7.385v-1.23h1.23v1.23zM7.692 20v-1.23h1.231V20zm0-14.77V4h1.231v1.23zM15.077 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zm3.692 11.078v-1.231H20v1.23zm0-7.385v-1.23H20v1.23zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightSwitchAccessOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
