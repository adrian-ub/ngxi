import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFloorLampOutlineIcon],svg[material-symbols-light-floor-lamp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19v-8H7.096q-.404 0-.655-.333q-.252-.333-.122-.717l1.508-4.82q.162-.509.58-.82q.42-.31.954-.31h5.278q.534 0 .953.31q.42.311.581.82l1.508 4.82q.13.385-.122.717q-.251.333-.655.333H12.5v8zm-4.15-9h9.3l-1.415-4.558q-.058-.192-.221-.317T14.639 5H9.362q-.212 0-.376.125t-.22.317zM8.5 21v-1h7v1zM12 7.5"></svg:path>`,
})
export class MaterialSymbolsLightFloorLampOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
