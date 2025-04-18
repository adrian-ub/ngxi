import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLevelUpAltIcon],svg[la-level-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 4l-.719.688l-8.5 8.5l1.438 1.439L16 7.844V26H6v2h12V7.844l6.781 6.781l1.438-1.438l-8.5-8.5z"></svg:path>`,
})
export class LaLevelUpAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
