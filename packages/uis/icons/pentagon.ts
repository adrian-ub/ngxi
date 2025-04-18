import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisPentagonIcon],svg[uis-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.6 9.2l-9-6.5q-.6-.45-1.2 0l-9 6.5c-.3.2-.5.7-.4 1.1l3.4 10.6c.1.4.5.7 1 .7h11.1c.4 0 .8-.3 1-.7L22 10.3c.1-.4-.1-.9-.4-1.1"></svg:path>`,
})
export class UisPentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
