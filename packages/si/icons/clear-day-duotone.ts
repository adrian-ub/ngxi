import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siClearDayDuotoneIcon],svg[si-clear-day-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 4V2m0 20v-2m-8-8H2m20 0h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41m0 11.32l1.41 1.41M4.93 4.93l1.41 1.41M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path></svg:g>`,
})
export class SiClearDayDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
