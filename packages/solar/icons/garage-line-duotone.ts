import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarGarageLineDuotoneIcon],svg[solar-garage-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m1 0V11.347a3 3 0 0 1 1.007-2.242l6-5.333a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V22M10 9h4"></svg:path><svg:path stroke-linecap="round" d="M9 15.5h6m-6 3h6" opacity=".5"></svg:path><svg:path d="M18 22v-6c0-1.886 0-2.828-.586-3.414S15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586S6 14.114 6 16v6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGarageLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
