import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextLineDuotoneIcon],svg[solar-text-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 7.95V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95"></svg:path><svg:path d="M12 3v18" opacity=".5"></svg:path><svg:path d="M7 21h10"></svg:path></svg:g>`,
})
export class SolarTextLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
