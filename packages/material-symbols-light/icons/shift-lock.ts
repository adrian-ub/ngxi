import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShiftLockIcon],svg[material-symbols-light-shift-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16.616v-3.847H5.115L12 3.577l6.885 9.192H15v3.846zM5 20v-1h14v1z"></svg:path>`,
})
export class MaterialSymbolsLightShiftLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
