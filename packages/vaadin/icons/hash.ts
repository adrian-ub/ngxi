import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinHashIcon],svg[vaadin-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6V4h-2.6l.6-2.8l-2-.4l-.7 3.2h-3L8 1.2L6 .8L5.3 4H2v2h2.9L4 10H1v2h2.6L3 14.8l2 .4l.7-3.2h3L8 14.8l2 .4l.7-3.2H14v-2h-2.9l.9-4zm-6 4H6l1-4h3z"></svg:path>`,
})
export class VaadinHashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
