import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRotate45Right20FilledIcon],svg[fluent-text-direction-rotate-45-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 8a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h.69l-2.22-2.22a.75.75 0 0 1 1.06-1.06l2.22 2.22v-.69a.75.75 0 0 1 .75-.75m-3.83-4.915a.75.75 0 0 0-1.005-1.006l-8 4a.75.75 0 1 0 .671 1.342L7.27 6.329l1.902 1.902l-1.092 2.183a.75.75 0 1 0 1.342.671zM9.879 6.817L8.683 5.622l2.39-1.195zM12 14.749a.75.75 0 0 0-1.5 0v.69L3.28 8.22a.75.75 0 1 0-1.06 1.06l7.22 7.22h-.69a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class FluentTextDirectionRotate45Right20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
