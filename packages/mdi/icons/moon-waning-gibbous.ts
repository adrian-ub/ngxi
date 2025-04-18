import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMoonWaningGibbousIcon],svg[mdi-moon-waning-gibbous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12c0-4.5-1.92-8.74-6-10a10 10 0 0 0 0 20c4.08-1.26 6-5.5 6-10"></svg:path>`,
})
export class MdiMoonWaningGibbousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
