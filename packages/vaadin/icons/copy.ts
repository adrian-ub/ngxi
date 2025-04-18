import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCopyIcon],svg[vaadin-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0v3h3z"></svg:path><svg:path fill="currentColor" d="M9 4H5V0H0v12h9zm4 0v3h3z"></svg:path><svg:path fill="currentColor" d="M12 4h-2v9H7v3h9V8h-4z"></svg:path>`,
})
export class VaadinCopyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
