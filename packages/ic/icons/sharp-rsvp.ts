import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRsvpIcon],svg[ic-sharp-rsvp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h1.5l-1.75 6h-1.5L12.5 9H14l1 3.43zM5.14 13L6 15H4.5l-.85-2H2.5v2H1V9h5v4zm-.64-2.5h-2v1h2zM23 13h-3.5v2H18V9h5zm-1.5-2.5h-2v1h2zM11.5 9v1.5h-3v.75h3V15H7v-1.5h3v-.75H7V9z"></svg:path>`,
})
export class IcSharpRsvpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
