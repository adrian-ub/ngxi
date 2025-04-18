import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon12FilledIcon],svg[fluent-hexagon-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.415 2c-.447 0-.86.239-1.083.626l-1.586 2.75a1.25 1.25 0 0 0 0 1.248l1.586 2.75A1.25 1.25 0 0 0 4.415 10h3.17c.447 0 .86-.239 1.083-.626l1.585-2.75a1.25 1.25 0 0 0 0-1.248l-1.585-2.75A1.25 1.25 0 0 0 7.585 2z"></svg:path>`,
})
export class FluentHexagon12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
