import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashlightOnIcon],svg[material-symbols-flashlight-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5V2h12v3zm6 10.5q.625 0 1.063-.437T13.5 14t-.437-1.062T12 12.5t-1.062.438T10.5 14t.438 1.063T12 15.5M8 22V11L6 8V7h12v1l-2 3v11z"></svg:path>`,
})
export class MaterialSymbolsFlashlightOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
