import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSpellCheckIcon],svg[carbon-spell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22h2l-5-12h-2l-5 12h2l1.24-3h5.53Zm-5.93-5l1.82-4.42h.25L18 17Z"></svg:path><svg:path fill="currentColor" d="M12 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v11h-2V6H6v20h6zm11-.82l-2.59-2.59L19 26l4 4l7-7l-1.41-1.41z"></svg:path>`,
})
export class CarbonSpellCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
