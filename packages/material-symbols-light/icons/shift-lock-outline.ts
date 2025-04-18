import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShiftLockOutlineIcon],svg[material-symbols-light-shift-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16.616v-3.847H5.115L12 3.577l6.885 9.192H15v3.846zm1-1h4v-3.847h2.775L12 5.246L7.225 11.77H10zM5 20v-1h14v1z"></svg:path>`,
})
export class MaterialSymbolsLightShiftLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
