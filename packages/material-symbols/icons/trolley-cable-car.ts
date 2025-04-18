import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrolleyCableCarIcon],svg[material-symbols-trolley-cable-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-.5L7.5 19H3v-2h1V6H3V4h4V2h10v2h4v2h-1v11h1v2h-4.5l1.5 1.5v.5h-2l-2-2h-4l-2 2zm7-11h5V7h-5zm-7 0h5V7H6zm6 6q.625 0 1.063-.437T13.5 14.5t-.437-1.062T12 13t-1.062.438T10.5 14.5t.438 1.063T12 16"></svg:path>`,
})
export class MaterialSymbolsTrolleyCableCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
