import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutosum24FilledIcon],svg[fluent-autosum-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.83 4.61A1 1 0 0 1 5.75 4h12.5a1 1 0 1 1 0 2H8.11l4.95 5.115a1 1 0 0 1 .04 1.346L7.924 18.5H18.25a1 1 0 1 1 0 2H5.75a1 1 0 0 1-.76-1.65l5.999-6.999L5.03 5.695a1 1 0 0 1-.2-1.085"></svg:path>`,
})
export class FluentAutosum24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
