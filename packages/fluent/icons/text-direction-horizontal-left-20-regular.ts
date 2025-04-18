import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionHorizontalLeft20RegularIcon],svg[fluent-text-direction-horizontal-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3a.5.5 0 0 0-.468.324l-3 8a.5.5 0 0 0 .936.352L11.972 9h3.057l1.003 2.676a.5.5 0 0 0 .936-.352l-3-8A.5.5 0 0 0 13.5 3m0 1.924L14.653 8h-2.306zm-8.354-.778a.5.5 0 1 1 .708.708L4.707 6H9.5a.5.5 0 0 1 0 1H4.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708.708L4.707 14H16.5a.5.5 0 0 1 0 1H4.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708z"></svg:path>`,
})
export class FluentTextDirectionHorizontalLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
