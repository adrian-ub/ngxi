import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStockpotOutlineIcon],svg[material-symbols-light-stockpot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7.98h16v8.597q0 1.01-.707 1.716T17.577 19H6.423q-1.01 0-1.716-.707T4 16.577zm1 1v7.597q0 .605.41 1.014q.408.409 1.013.409h11.154q.605 0 1.014-.41q.409-.408.409-1.013V8.981zM4 6.597v-1h5.5v-.769q0-.352.23-.59T10.317 4h3.366q.358 0 .587.238t.23.589v.77H20v1zm8 6.885"></svg:path>`,
})
export class MaterialSymbolsLightStockpotOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
