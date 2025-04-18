import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceUserSingleCloseGeometricHumanPersonSingleUpUserIcon],svg[streamline-interface-user-single-close-geometric-human-person-single-up-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="3.75" r="3.25"></svg:circle><svg:path d="M13.18 13.5a6.49 6.49 0 0 0-12.36 0Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceUserSingleCloseGeometricHumanPersonSingleUpUserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
