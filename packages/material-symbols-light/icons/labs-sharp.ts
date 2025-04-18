import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabsSharpIcon],svg[material-symbols-light-labs-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.804 0-3.075-1.241T7.654 16.73V7.654H6V3h12v4.654h-1.673v9.365q-.116 1.69-1.367 2.836T12 21m0-1q1.386 0 2.357-.942q.97-.943.97-2.327v-.75h-3.193v-1h3.193v-2.846h-3.192v-1h3.192V7.654H8.654v9.077q0 1.384.976 2.327T12 20"></svg:path>`,
})
export class MaterialSymbolsLightLabsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
