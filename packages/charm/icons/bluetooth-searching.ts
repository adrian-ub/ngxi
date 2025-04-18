import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmBluetoothSearchingIcon],svg[charm-bluetooth-searching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 11.25L10.25 5l-4.5-3.25v12.5l4.5-3.25l-8.5-6.25m11.5 1.5s1 .5 1 1.75s-1 1.75-1 1.75m-2-1.75"></svg:path>`,
})
export class CharmBluetoothSearchingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
