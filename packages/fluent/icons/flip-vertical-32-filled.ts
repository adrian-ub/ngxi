import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical32FilledIcon],svg[fluent-flip-vertical-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.43 2.201c.356.23.57.625.57 1.049v10.5c0 .69-.56 1.25-1.25 1.25H3.25a1.25 1.25 0 0 1-.51-2.391l23.5-10.5a1.25 1.25 0 0 1 1.19.092M9.112 12.5H25.5V5.178zM28 29a1 1 0 0 1-1.416.91l-24-11A1 1 0 0 1 3 17h24a1 1 0 0 1 1 1z"></svg:path>`,
})
export class FluentFlipVertical32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
