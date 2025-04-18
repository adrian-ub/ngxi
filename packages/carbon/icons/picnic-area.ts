import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPicnicAreaIcon],svg[carbon-picnic-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 12a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m2 16h-4.153l-.667-4H24v-2H8v2h2.82l-.667 4H6v2h3.82l-.667 4h2.027l.667-4h8.305l.667 4h2.028l-.667-4H26zm-13.82 0l.667-4h6.306l.666 4z"></svg:path>`,
})
export class CarbonPicnicAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
