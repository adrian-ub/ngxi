import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTypographyIcon],svg[tdesign-typography-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h15v8H2zm2 2v4h11V5zm-2 9h20v2H2zm0 5h20v2H2z"></svg:path>`,
})
export class TdesignTypographyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
