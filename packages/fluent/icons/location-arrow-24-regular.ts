import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrow24RegularIcon],svg[fluent-location-arrow-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.958 2.104c1.213-.467 2.405.725 1.938 1.938L15.36 21.038c-.522 1.36-2.48 1.252-2.85-.156l-1.845-7.011a.75.75 0 0 0-.535-.535l-7.01-1.845c-1.409-.37-1.516-2.328-.157-2.85zm.538 1.4L3.5 10.04l7.011 1.845a2.25 2.25 0 0 1 1.603 1.603l1.845 7.01z"></svg:path>`,
})
export class FluentLocationArrow24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
