import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrolleyCableCarIcon],svg[material-symbols-light-trolley-cable-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 20v-.308L8.942 18H4v-1h1V6H4V5h3.75V3.77h8.5V5H20v1h-1v11h1v1h-4.962l1.693 1.692V20h-1.039l-2-2H10.29l-2 2zm5.25-9.461H18v-3.77h-5.5zm-6.5 0h5.5v-3.77H6zm6.004 4.75q.41 0 .683-.274t.274-.685t-.274-.697t-.684-.287t-.697.287t-.287.697t.287.684t.697.275"></svg:path>`,
})
export class MaterialSymbolsLightTrolleyCableCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
