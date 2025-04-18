import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCallEndSharpIcon],svg[material-symbols-call-end-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.025 17L.4 13.475l1-1.025q2.175-2.225 4.963-3.337T12 8t5.625 1.113T22.6 12.45l1 1.025L19.975 17L16 14v-3.35q-.95-.3-1.95-.475T12 10t-2.05.175T8 10.65V14z"></svg:path>`,
})
export class MaterialSymbolsCallEndSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
