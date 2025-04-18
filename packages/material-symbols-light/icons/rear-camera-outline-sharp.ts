import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRearCameraOutlineSharpIcon],svg[material-symbols-light-rear-camera-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15.289L9.289 12L6 8.711l-.688.689l2.1 2.1H3v1h4.412l-2.1 2.1zM16.25 7.73q.31 0 .52-.21t.21-.52t-.21-.521t-.52-.21t-.52.21t-.21.52t.21.52q.209.21.52.21M12.5 19H20V5h-7.5zM3 20v-5.115h1V19h7.5V5H4v4.116H3V4h18v16zm8.5-1V5z"></svg:path>`,
})
export class MaterialSymbolsLightRearCameraOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
