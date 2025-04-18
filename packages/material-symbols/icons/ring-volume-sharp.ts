import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRingVolumeSharpIcon],svg[material-symbols-ring-volume-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.025 21L.4 17.475l1-1.025q2.175-2.225 4.963-3.337T12 12t5.625 1.113T22.6 16.45l1 1.025L19.975 21L16 18v-3.35q-.95-.3-1.95-.475T12 14t-2.05.175T8 14.65V18zM11 7V2h2v5zm6.6 2.85L16.2 8.4l3.55-3.55l1.4 1.45zm-11.2 0L2.85 6.3l1.4-1.45L7.8 8.4z"></svg:path>`,
})
export class MaterialSymbolsRingVolumeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
