import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowMoveIcon],svg[proicons-arrow-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9.005V2.75M9 5.324l2.273-2.273c.201-.2.464-.301.727-.301m3 2.574l-2.273-2.273c-.2-.2-.464-.301-.727-.301M14.995 12h6.255m-2.574-3l2.273 2.273c.2.201.301.464.301.727m-2.574 3l2.273-2.273c.2-.2.301-.464.301-.727M12 14.995v6.255m-3-2.574l2.273 2.273c.201.2.464.301.727.301m3-2.574l-2.273 2.273c-.2.2-.464.301-.727.301M9.005 12H2.75m2.574-3l-2.273 2.273c-.2.201-.301.464-.301.727m2.574 3l-2.273-2.273c-.2-.2-.301-.464-.301-.727"></svg:path>`,
})
export class ProiconsArrowMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
