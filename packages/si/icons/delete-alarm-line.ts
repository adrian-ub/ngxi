import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siDeleteAlarmLineIcon],svg[si-delete-alarm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m9.172 15.828l5.656-5.656m0 5.656l-5.656-5.656M18 3l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class SiDeleteAlarmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
