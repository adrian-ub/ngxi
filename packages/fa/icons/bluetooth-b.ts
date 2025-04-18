import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBluetoothBIcon],svg[fa-bluetooth-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m564 1423l173-172l-173-172zm0-710l173-172l-173-172zm32 183l356 356l-539 540v-711l-297 296L8 1269l372-373L8 523l108-108l297 296V0l539 540z"></svg:path>`,
})
export class FaBluetoothBIcon {
  readonly viewBox = input("0 0 960 1792")
  readonly width = input("0.54em")
  readonly height = input("1em")
}
