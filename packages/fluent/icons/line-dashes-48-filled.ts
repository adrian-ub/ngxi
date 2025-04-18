import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineDashes48FilledIcon],svg[fluent-line-dashes-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.56 6.56a1.5 1.5 0 0 0-2.12-2.12l-2 2a1.5 1.5 0 0 0 2.12 2.12zm-8 5.88a1.5 1.5 0 0 1 0 2.12l-3 3a1.5 1.5 0 0 1-2.12-2.12l3-3a1.5 1.5 0 0 1 2.12 0m-9 11.12a1.5 1.5 0 0 0-2.12-2.12l-3 3a1.5 1.5 0 0 0 2.12 2.12zm-9 6.88a1.5 1.5 0 0 1 0 2.12l-3 3a1.5 1.5 0 0 1-2.12-2.12l3-3a1.5 1.5 0 0 1 2.12 0m-9 9a1.5 1.5 0 0 1 0 2.12l-2 2a1.5 1.5 0 0 1-2.12-2.12l2-2a1.5 1.5 0 0 1 2.12 0"></svg:path>`,
})
export class FluentLineDashes48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
