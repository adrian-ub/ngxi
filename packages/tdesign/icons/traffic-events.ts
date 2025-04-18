import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTrafficEventsIcon],svg[tdesign-traffic-events-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.914l3.643 8.687l.406.899l-.025.01L19.165 19H21v2H3v-2h1.835l3.14-7.49l-.024-.01l.406-.9zM10.149 11.5l-1.145 2.73h5.992l-1.145-2.73zm2.863-2L12 7.086L10.988 9.5zm2.823 6.73h-7.67L7.004 19h9.992z"></svg:path>`,
})
export class TdesignTrafficEventsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
