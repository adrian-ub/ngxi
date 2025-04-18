import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangle32FilledIcon],svg[fluent-triangle-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.847 4.684c-1.235-2.242-4.457-2.243-5.693-.001L2.404 24.18C1.21 26.346 2.777 29 5.251 29h21.492c2.473 0 4.04-2.653 2.846-4.819z"></svg:path>`,
})
export class FluentTriangle32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
