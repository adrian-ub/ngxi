import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOnHubDeviceOutlineRoundedIcon],svg[material-symbols-on-hub-device-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21q-.425 0-.712-.288T8 20t.288-.712T9 19h6q.425 0 .713.288T16 20t-.288.713T15 21zm-1.075-3.925L7 5.15q-.075-.875.525-1.513T9 3h6q.875 0 1.475.637T17 5.15l-.925 11.925q-.05.4-.325.663t-.675.262h-6.15q-.4 0-.675-.262t-.325-.663M9.85 16h4.3L15 5H9zm0-11H9h6z"></svg:path>`,
})
export class MaterialSymbolsOnHubDeviceOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
