import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond24FilledIcon],svg[fluent-diamond-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.952 9.702a3.25 3.25 0 0 0 0 4.597l6.75 6.75a3.25 3.25 0 0 0 4.597 0l6.75-6.75a3.25 3.25 0 0 0 0-4.597l-6.75-6.75a3.25 3.25 0 0 0-4.597 0z"></svg:path>`,
})
export class FluentDiamond24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
