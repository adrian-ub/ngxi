import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceUserSquareAlternateSquareGeometricHumanPersonSingleUserIcon],svg[streamline-interface-user-square-alternate-square-geometric-human-person-single-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="5.5" r="2.5"></svg:circle><svg:path d="M2.1 13.5a5 5 0 0 1 9.8 0"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceUserSquareAlternateSquareGeometricHumanPersonSingleUserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
