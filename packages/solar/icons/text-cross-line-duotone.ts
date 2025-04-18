import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextCrossLineDuotoneIcon],svg[solar-text-cross-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586S20 5.114 20 7v.95M12 3v18m-5 0h10" opacity=".5"></svg:path><svg:path d="M4 12h16"></svg:path></svg:g>`,
})
export class SolarTextCrossLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
