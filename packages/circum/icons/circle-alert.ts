import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCircleAlertIcon],svg[circum-circle-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 9a.5.5 0 0 0-1 0v4.02a.5.5 0 0 0 1 0Z"></svg:path><svg:circle cx="12" cy="15.001" r=".5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 21.935A9.933 9.933 0 1 1 21.934 12A9.945 9.945 0 0 1 12 21.935m0-18.866A8.933 8.933 0 1 0 20.934 12A8.944 8.944 0 0 0 12 3.069"></svg:path>`,
})
export class CircumCircleAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
