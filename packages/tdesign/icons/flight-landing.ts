import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlightLandingIcon],svg[tdesign-flight-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.302 1.203l3.716.995l2.566 8.97l4.958 1.329a2.5 2.5 0 1 1-1.294 4.83L1.553 12.584l.46-7.124l3.173.85l.642 2.243l3.335.894zm1.956 2.594l-.138 8.246l-6.904-1.85l-.412-1.441l-.15 2.325l16.112 4.318a.5.5 0 1 0 .259-.966l-6.053-1.622l-2.566-8.97zM2 19h20v2H2z"></svg:path>`,
})
export class TdesignFlightLandingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
