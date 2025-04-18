import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPointOfPresenceIcon],svg[carbon-point-of-presence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H18a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2h2v2h-2v10h10V18h-2v-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2M14 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2h-2V4H4v10h10v-2h2v2a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M26 9a2.993 2.993 0 0 0-5.816-1H9v2h11.184A3 3 0 0 0 22 11.815V23h2V11.816A3 3 0 0 0 26 9m-3 1a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonPointOfPresenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
