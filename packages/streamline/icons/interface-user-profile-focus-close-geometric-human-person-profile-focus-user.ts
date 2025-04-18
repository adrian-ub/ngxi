import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceUserProfileFocusCloseGeometricHumanPersonProfileFocusUserIcon],svg[streamline-interface-user-profile-focus-close-geometric-human-person-profile-focus-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="5.5" r="2.5"></svg:circle><svg:path d="M10.31 10.75a5 5 0 0 0-6.62 0m9.81-.25v2a1 1 0 0 1-1 1h-2m0-13h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m0 13h-2a1 1 0 0 1-1-1v-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceUserProfileFocusCloseGeometricHumanPersonProfileFocusUserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
