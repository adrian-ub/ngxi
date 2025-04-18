import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectangleLandscape48FilledIcon],svg[fluent-rectangle-landscape-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.25C4 10.35 6.35 8 9.25 8h29.5c2.9 0 5.25 2.35 5.25 5.25v21.5c0 2.9-2.35 5.25-5.25 5.25H9.25A5.25 5.25 0 0 1 4 34.75z"></svg:path>`,
})
export class FluentRectangleLandscape48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
