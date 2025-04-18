import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleLeft32FilledIcon],svg[fluent-triangle-left-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.682 13.15c-2.242 1.236-2.243 4.457-.001 5.693l19.498 10.75c2.166 1.194 4.82-.373 4.82-2.846V5.255c0-2.473-2.653-4.04-4.819-2.847z"></svg:path>`,
})
export class FluentTriangleLeft32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
