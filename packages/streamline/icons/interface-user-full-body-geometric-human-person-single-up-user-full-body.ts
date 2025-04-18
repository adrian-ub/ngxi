import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceUserFullBodyGeometricHumanPersonSingleUpUserFullBodyIcon],svg[streamline-interface-user-full-body-geometric-human-person-single-up-user-full-body-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="2.5" r="2"></svg:circle><svg:path d="M10.5 8a3.5 3.5 0 0 0-7 0v1.5H5l.5 4h3l.5-4h1.5Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceUserFullBodyGeometricHumanPersonSingleUpUserFullBodyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
