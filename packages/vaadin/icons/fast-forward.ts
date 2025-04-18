import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFastForwardIcon],svg[vaadin-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14l7-7zm7 0v14l7-7zm7 0h2v14h-2z"></svg:path>`,
})
export class VaadinFastForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
