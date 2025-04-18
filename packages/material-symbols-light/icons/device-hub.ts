import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeviceHubIcon],svg[material-symbols-light-device-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-4h3.385l4.115-4.115V8.992q-.861-.229-1.43-.895q-.57-.666-.57-1.558q0-1.039.73-1.77T12 4.04t1.77.73t.73 1.77q0 .892-.57 1.558q-.568.667-1.43.895v2.893L16.616 16H20v4h-4v-3.165l-4-4l-4 4V20z"></svg:path>`,
})
export class MaterialSymbolsLightDeviceHubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
