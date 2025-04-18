import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRampLeftIcon],svg[material-symbols-light-ramp-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19.98V5.94L9.4 8.036l-.708-.708L12 4.019l3.308 3.308l-.708.708l-2.1-2.094V9q0 1.542.586 2.86q.585 1.319 1.455 2.366t1.857 1.845t1.794 1.3l-.719.72q-1.713-1.126-2.998-2.456q-1.284-1.33-1.975-2.762v7.108z"></svg:path>`,
})
export class MaterialSymbolsLightRampLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
