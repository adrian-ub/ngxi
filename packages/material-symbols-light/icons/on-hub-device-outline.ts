import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOnHubDeviceOutlineIcon],svg[material-symbols-light-on-hub-device-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.923 19.77v-1h6.154v1zm0-2.77L8.038 5.689q-.055-.703.41-1.196Q8.914 4 9.616 4h4.769q.702 0 1.167.493t.41 1.195L15.077 17zm.927-1h4.3l.812-10.385q.019-.269-.145-.442T14.385 5h-4.77q-.269 0-.432.173q-.164.173-.144.443zm0-11h-.811h5.923z"></svg:path>`,
})
export class MaterialSymbolsLightOnHubDeviceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
