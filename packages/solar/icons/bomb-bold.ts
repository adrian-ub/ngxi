import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBombBoldIcon],svg[solar-bomb-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m.981-12.147a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315zm-1.964 6.69l.75-.75l-.3-.76l-.76-.3l-.75.75q.577.483 1.06 1.06"></svg:path>`,
})
export class SolarBombBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
