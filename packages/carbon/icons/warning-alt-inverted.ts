import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWarningAltInvertedIcon],svg[carbon-warning-alt-inverted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 17M15 6h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M29.855 2.481a1 1 0 0 1 .032.98l-13 25a1 1 0 0 1-1.774 0l-13-25A1 1 0 0 1 3 2h26a1 1 0 0 1 .855.481M4.649 4.003L15.998 25.83h.004l11.35-21.826L27.348 4H4.651Z"></svg:path>`,
})
export class CarbonWarningAltInvertedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
