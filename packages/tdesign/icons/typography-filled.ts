import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTypographyFilledIcon],svg[tdesign-typography-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h15v8H2zm0 11h20v2H2zm0 5h20v2H2z"></svg:path>`,
})
export class TdesignTypographyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
