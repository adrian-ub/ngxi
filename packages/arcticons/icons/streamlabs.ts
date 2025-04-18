import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStreamlabsIcon],svg[arcticons-streamlabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.316 14.25h18.672a6.51 6.51 0 0 1 6.512 6.512v13.78a6.51 6.51 0 0 1-6.512 6.511H15.71a3.907 3.907 0 0 1-3.908-3.907V20.762a6.51 6.51 0 0 1 6.512-6.512m7.22 12.051v7.011m8.91-7.011v7.011M19.107 6.947A14.607 14.607 0 0 0 4.5 21.553"></svg:path>`,
})
export class ArcticonsStreamlabsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
