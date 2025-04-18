import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical48RegularIcon],svg[fluent-flip-vertical-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.423 4.197c.36.23.577.627.577 1.053v15.5c0 .69-.56 1.25-1.25 1.25H5.25a1.25 1.25 0 0 1-.525-2.384l33.5-15.5a1.25 1.25 0 0 1 1.198.08M10.928 19.5H37.5V7.206zM40 43a1 1 0 0 1-1.425.905l-34-16A1 1 0 0 1 5 26h34a1 1 0 0 1 1 1z"></svg:path>`,
})
export class FluentFlipVertical48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
