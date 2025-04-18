import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTeardropBottomRight28FilledIcon],svg[fluent-teardrop-bottom-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 2C7.26 2 2 7.26 2 13.75v.5C2 20.74 7.26 26 13.75 26h9.5A2.75 2.75 0 0 0 26 23.25v-9.5C26 7.26 20.74 2 14.25 2z"></svg:path>`,
})
export class FluentTeardropBottomRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
