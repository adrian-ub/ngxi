import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilParkingSquareIcon],svg[uil-parking-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6H9a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0v-3h2a4 4 0 0 0 0-8m0 6h-2V8h2a2 2 0 0 1 0 4m7-10H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilParkingSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
