import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceUserLockActionsLockGeometricHumanPersonSingleUpUserIcon],svg[streamline-interface-user-lock-actions-lock-geometric-human-person-single-up-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="5" cy="2.75" r="2.25"></svg:circle><svg:path d="M6 6.61A4.49 4.49 0 0 0 .5 11v1.5h4"></svg:path><svg:rect width="6" height="4.5" x="7.5" y="9" rx=".5"></svg:rect><svg:path d="M8.5 9V8a2 2 0 0 1 4 0v1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceUserLockActionsLockGeometricHumanPersonSingleUpUserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
