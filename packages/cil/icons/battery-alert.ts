import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBatteryAlertIcon],svg[cil-battery-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 176v-56.41A23.825 23.825 0 0 0 408 96H240v32h160v80h64v104h-64v80H47.986V128H112V96H39.986a23.825 23.825 0 0 0-24 23.59v280.82a23.825 23.825 0 0 0 24 23.59H408a23.825 23.825 0 0 0 24-23.59V344h64V176Z"></svg:path><svg:path fill="currentColor" d="M192 64v-8h-32v200h32zm0 240v-16h-32v32h32z"></svg:path>`,
})
export class CilBatteryAlertIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
