import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler48FilledIcon],svg[fluent-ruler-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.022 7.815A4.25 4.25 0 0 1 18.25 4h11.5A4.25 4.25 0 0 1 34 8.25v31.5A4.25 4.25 0 0 1 29.75 44h-11.5A4.25 4.25 0 0 1 14 39.75V8.25q0-.22.022-.435M16.5 10.25v2.5h4.25a1.25 1.25 0 1 0 0-2.5zm0 6.25V19h8.25a1.25 1.25 0 1 0 0-2.5zm0 6.25v2.5h4.25a1.25 1.25 0 1 0 0-2.5zm0 6.25v2.5h8.25a1.25 1.25 0 1 0 0-2.5zm0 6.25v2.5h4.25a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentRuler48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
