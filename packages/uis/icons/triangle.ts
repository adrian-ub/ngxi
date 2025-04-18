import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisTriangleIcon],svg[uis-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 19.3l-9-15.6l-.3-.3c-.5-.3-1.1-.2-1.4.3l-9 15.6c-.2.1-.2.3-.2.5c0 .6.4 1 1 1h18c.2 0 .3 0 .5-.1c.5-.3.6-.9.4-1.4"></svg:path>`,
})
export class UisTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
