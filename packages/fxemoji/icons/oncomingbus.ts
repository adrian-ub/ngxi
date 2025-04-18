import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiOncomingbusIcon],svg[fxemoji-oncomingbus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#132028" d="M400 471.417c-9.6 5.449-20.339 8.583-32 8.583s-22.4-3.134-32-8.583V360.583c9.6-5.449 20.339-8.583 32-8.583s22.4 3.134 32 8.583zM176 360.583c-9.6-5.449-20.339-8.583-32-8.583s-23.467 3.134-32 8.583v110.833c8.533 5.449 20.339 8.583 32 8.583s22.4-3.134 32-8.583zm-48-247c-9.6-5.449-20.339-8.583-32-8.583s-23.467 3.134-32 8.583v78.833c8.533 5.45 20.339 8.584 32 8.584s22.4-3.134 32-8.583zm320 0c-9.6-5.449-20.339-8.583-32-8.583s-23.467 3.134-32 8.583v78.833c8.533 5.449 20.339 8.583 32 8.583s22.4-3.134 32-8.583z"></svg:path><svg:path fill="#FF473E" d="M96 64h320v368H96z"></svg:path><svg:path fill="#F9F9F7" d="M104 72h304v224H104z"></svg:path><svg:path fill="#FFD469" d="M184 348c0 11.046-8.954 20-20 20s-20-8.954-20-20s8.954-20 20-20s20 8.954 20 20m164-20c-11.046 0-20 8.954-20 20s8.954 20 20 20s20-8.954 20-20s-8.954-20-20-20"></svg:path><svg:path fill="#132028" d="M396 280H116V136h280zM353 88H161v32h192z"></svg:path><svg:path fill="#D32A2A" d="M140 324c0 6.627-5.373 12-12 12s-12-5.373-12-12s5.373-12 12-12s12 5.373 12 12m245-12c-6.627 0-12 5.373-12 12s5.373 12 12 12s12-5.373 12-12s-5.373-12-12-12"></svg:path>`,
})
export class FxemojiOncomingbusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
