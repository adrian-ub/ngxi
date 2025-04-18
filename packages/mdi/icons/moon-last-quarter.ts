import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMoonLastQuarterIcon],svg[mdi-moon-last-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 0 0 20Z"></svg:path>`,
})
export class MdiMoonLastQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
