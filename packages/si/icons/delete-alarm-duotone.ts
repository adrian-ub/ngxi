import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siDeleteAlarmDuotoneIcon],svg[si-delete-alarm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="m9.172 15.828l5.656-5.656m0 5.656l-5.656-5.656M18 3l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path></svg:g>`,
})
export class SiDeleteAlarmDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
