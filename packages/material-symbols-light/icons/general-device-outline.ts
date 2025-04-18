import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGeneralDeviceOutlineIcon],svg[material-symbols-light-general-device-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.77 17V5.616q0-.667.474-1.141Q9.72 4 10.386 4h3.234q.667 0 1.139.475q.472.474.472 1.14V17zm1-1h4.46V5.616q0-.27-.172-.443Q13.885 5 13.616 5h-3.231q-.27 0-.443.173t-.173.443zm-1 3.385v-1h6.46v1zm1-3.385h4.46z"></svg:path>`,
})
export class MaterialSymbolsLightGeneralDeviceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
