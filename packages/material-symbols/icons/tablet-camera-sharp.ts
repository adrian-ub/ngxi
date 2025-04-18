import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabletCameraSharpIcon],svg[material-symbols-tablet-camera-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V4h22v16h-5V6H6v14zm6.5 2v-7H10l1-1h2l1 1h2.5v7zm4.5-1.75q.725 0 1.238-.513t.512-1.237t-.513-1.237T12 16.75t-1.237.513t-.513 1.237t.513 1.238T12 20.25"></svg:path>`,
})
export class MaterialSymbolsTabletCameraSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
