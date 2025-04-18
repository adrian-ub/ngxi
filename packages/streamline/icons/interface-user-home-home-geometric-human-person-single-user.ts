import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceUserHomeHomeGeometricHumanPersonSingleUserIcon],svg[streamline-interface-user-home-home-geometric-human-person-single-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="2.5"></svg:circle><svg:path d="M2.73 13.4a5 5 0 0 1 8.54 0"></svg:path><svg:path d="M13.5 6.94a1 1 0 0 0-.32-.74L7 .5L.82 6.2a1 1 0 0 0-.32.74v5.56a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceUserHomeHomeGeometricHumanPersonSingleUserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
