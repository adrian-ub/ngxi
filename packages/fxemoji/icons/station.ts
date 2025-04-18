import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiStationIcon],svg[fxemoji-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009E83" d="M240.019 64H16v368h320V64zM176 343.019l-152-152V72h95.981L176 128.019L232.019 72H328v119.019z"></svg:path><svg:path fill="#FFD469" d="M128 340c0 11.046-8.954 20-20 20s-20-8.954-20-20s8.954-20 20-20s20 8.954 20 20m116-20c-11.046 0-20 8.954-20 20s8.954 20 20 20s20-8.954 20-20s-8.954-20-20-20m-180 8c-6.627 0-12 5.373-12 12s5.373 12 12 12s12-5.373 12-12s-5.373-12-12-12m222 0c-6.627 0-12 5.373-12 12s5.373 12 12 12s12-5.373 12-12s-5.373-12-12-12"></svg:path><svg:path fill="#575A5B" d="M16 384h320v48H16z"></svg:path><svg:path fill="#132028" d="m49 496l64-64h32l-16 64zm255 0l-64-64h-32l16 64zM88 128H36v96h52zm8 96h160v-96H96zm168-96v96h52v-96zM176 16v32h288v384H352v64h144V16z"></svg:path>`,
})
export class FxemojiStationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
