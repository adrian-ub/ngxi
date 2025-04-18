import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoOldMobileIcon],svg[entypo-old-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.6 3H7V0H5v18.6c0 .77.629 1.4 1.398 1.4H13.6c.769 0 1.4-.631 1.4-1.4V4.401C15 3.629 14.369 3 13.6 3M8 15c-.691 0-1.25-.447-1.25-1s.559-1 1.25-1s1.25.447 1.25 1s-.559 1-1.25 1m1.25 2c0 .553-.559 1-1.25 1s-1.25-.447-1.25-1s.559-1 1.25-1s1.25.447 1.25 1M7 11V5h6v6zm5 4c-.691 0-1.25-.447-1.25-1s.559-1 1.25-1s1.25.447 1.25 1s-.559 1-1.25 1m1.25 2c0 .553-.559 1-1.25 1s-1.25-.447-1.25-1s.559-1 1.25-1s1.25.447 1.25 1"></svg:path>`,
})
export class EntypoOldMobileIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
