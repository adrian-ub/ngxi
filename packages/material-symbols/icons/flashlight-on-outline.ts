import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashlightOnOutlineIcon],svg[material-symbols-flashlight-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22V11L6 8V2h12v6l-2 3v11zm4-6.5q-.625 0-1.062-.437T10.5 14t.438-1.062T12 12.5t1.063.438T13.5 14t-.437 1.063T12 15.5M8 5h8V4H8zm8 2H8v.4l2 3V20h4v-9.6l2-3zm-4 5"></svg:path>`,
})
export class MaterialSymbolsFlashlightOnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
