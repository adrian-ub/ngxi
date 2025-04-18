import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraIndoorRoundedIcon],svg[material-symbols-light-camera-indoor-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 20q-.667 0-1.141-.475T5 18.386v-8.077q0-.384.172-.727t.474-.565l5.385-4.058q.423-.324.966-.324t.972.324l5.385 4.057q.303.222.474.566q.172.343.172.727v8.077q0 .666-.475 1.14t-1.14.475zm2.538-3.384h4q.262 0 .438-.177q.177-.177.177-.439v-1.461l1.256.655q.212.106.401-.014t.19-.34v-1.68q0-.22-.19-.34t-.401-.014l-1.256.656V12q0-.261-.177-.438t-.438-.177h-4q-.262 0-.438.177q-.177.177-.177.438v4q0 .262.177.439q.176.177.438.177"></svg:path>`,
})
export class MaterialSymbolsLightCameraIndoorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
