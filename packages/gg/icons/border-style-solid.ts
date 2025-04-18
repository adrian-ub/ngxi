import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBorderStyleSolidIcon],svg[gg-border-style-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h20v2H2z"></svg:path>`,
})
export class GgBorderStyleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
