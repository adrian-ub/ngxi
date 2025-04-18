import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUrlForwarderIcon],svg[arcticons-url-forwarder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.905 20.033H9.093L4.5 27.989h3.812ZM28.182 9.024v10.784h-3.811l-4.594 7.956h8.405v11.212L43.5 23.844Zm-7.75 11.009H16.62l-4.593 7.956h3.811Z"></svg:path>`,
})
export class ArcticonsUrlForwarderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
