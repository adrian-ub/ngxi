import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirReportsSolidIcon],svg[iconoir-reports-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="5" height="18" x="16" y="3" rx="2"></svg:rect><svg:rect width="5" height="12" x="9.5" y="9" rx="2"></svg:rect><svg:rect width="5" height="5" x="3" y="16" rx="2"></svg:rect></svg:g>`,
})
export class IconoirReportsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
