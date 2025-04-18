import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLodgingIcon],svg[maki-lodging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 2.5c-.3 0-.5.2-.5.5v9.5c0 .3.2.5.5.5s.5-.2.5-.5V11h13v1.5c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5H1V3c0-.3-.2-.5-.5-.5m3 .5C2.7 3 2 3.7 2 4.5S2.7 6 3.5 6S5 5.3 5 4.5S4.3 3 3.5 3M7 4C5.5 4 5.5 5.5 5.5 5.5V7h-3c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5H15V6.5C15 4 12.5 4 12.5 4z"></svg:path>`,
})
export class MakiLodgingIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
