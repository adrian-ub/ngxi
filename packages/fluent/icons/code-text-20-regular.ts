import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeText20RegularIcon],svg[fluent-code-text-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1zm3 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM4 11.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5M2.5 14a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1zm10-5.5A.5.5 0 0 1 13 8h3.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5m-2-3.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentCodeText20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
