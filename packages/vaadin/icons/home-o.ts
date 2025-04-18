import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinHomeOIcon],svg[vaadin-home-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6.6L8 1.4L6 2.7V1H4v3L0 6.6l1.9 2.7l.1-.1V15h5v-4h2v4h5V9.2l.1.1zm-14.6.3L8 2.6l6.6 4.3l-.7 1L8 4L2.1 7.9zM13 14h-3v-4H6v4H3V8.6l5-3.3l5 3.3z"></svg:path>`,
})
export class VaadinHomeOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
