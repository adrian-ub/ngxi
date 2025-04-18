import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChessFillIcon],svg[ri-chess-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h12.808c-.398-1.815-1.465-3.147-3.66-4.088a.46.46 0 0 1-.263-.568a.45.45 0 0 1 .476-.303l4.485.51a1 1 0 0 0 .98-.498l.827-1.445a1 1 0 0 0-.105-1.142L15.5 2.5V.287C9.336 2.84 5 8.913 5 16m-1 1h15v3h1v2H3v-2h1zM15 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class RiChessFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
