import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOfferIcon],svg[mdi-offer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13c.6 0 1.1.2 1.4.6c.4.4.6.9.6 1.4l-8 3l-7-2V7h1.9l7.3 2.7c.5.2.8.6.8 1.1c0 .3-.1.6-.3.8s-.5.4-.9.4H14l-1.7-.7l-.3.9l2 .8zM2 7h4v11H2z"></svg:path>`,
})
export class MdiOfferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
