import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2QuantityIcon],svg[fluent-mdl2-quantity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1472 600l575 288v782l-575 288l-576-286v-321l-320 159L0 1224l1-784l575-288l575 288l1 321zm368 327l-368-183l-368 183l368 184zM944 479L576 296L208 479l368 184zM129 583l-1 561l384 191V774zm511 752l257-127V888l127-63l-1-242l-383 191zm385-304l-1 561l384 191v-561zm511 752l383-192v-560l-383 191z"></svg:path>`,
})
export class FluentMdl2QuantityIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
